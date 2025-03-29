import {
  Controller,
  Get,
  Query,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login(@Res() res: Response) {
    try {
      const authUrl = this.authService.getLoginUrl();
      return res.redirect(authUrl);
    } catch (error) {
      throw new HttpException(
        'Error in login',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('callback')
  async callback(@Query('code') code: string) {
    try {
      return await this.authService.authenticateUser(code);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('logout')
  logout(@Res() res: Response) {
    try {
      const logoutUrl = this.authService.getLogoutUrl();
      return res.redirect(logoutUrl);
    } catch (error) {
      throw new HttpException(
        'Error in logout',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
