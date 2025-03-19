import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  private readonly domain: string;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly redirectUri: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    this.domain = this.configService.getOrThrow('AUTH0_DOMAIN');
    this.clientId = this.configService.getOrThrow('AUTH0_CLIENT_ID');
    this.clientSecret = this.configService.getOrThrow('AUTH0_CLIENT_SECRET');
    this.redirectUri = this.configService.getOrThrow('REDIRRECT_URI');
  }

  getLoginUrl(): string {
    return `https://${this.domain}/authorize?response_type=code&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=openid profile email`;
  }

  getLogoutUrl(): string {
    return `https://${this.domain}/v2/logout?client_id=${this.clientId}&returnTo=${this.redirectUri}`;
  }

  async exchangeCodeForToken(code: string) {
    if (!code) {
      throw new HttpException('Authorization code is required', HttpStatus.BAD_REQUEST);
    }
    try {
      const tokenUrl = `https://${this.domain}/oauth/token`;
      const response = await axios.post(tokenUrl, {
        grant_type: 'authorization_code',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code,
        redirect_uri: this.redirectUri,
      });

      return response.data;
    } catch (error) {
      console.error('Error exchanging code for token:', error.response?.data || error.message);
      throw new HttpException('Failed to retrieve tokens from Auth0', HttpStatus.UNAUTHORIZED);
    }
  }

  async getUserInfo(access_token: string) {
    try {
      const userInfoUrl = `https://${this.domain}/userinfo`;
      const response = await axios.get(userInfoUrl, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error.response?.data || error.message);
      throw new HttpException('Failed to retrieve user info', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async authenticateUser(code: string) {
    const { access_token, id_token } = await this.exchangeCodeForToken(code);
    if (!access_token || !id_token) {
      throw new HttpException('Invalid tokens', HttpStatus.UNAUTHORIZED);
    }
    const userInfo = await this.getUserInfo(access_token);
    const { sub, email, name } = userInfo;

    if (!sub || !email) {
      throw new HttpException('User data is incomplete', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const user = await this.userService.findOrCreate({ sub, email, name });
    return { access_token, id_token, user };
  }
}