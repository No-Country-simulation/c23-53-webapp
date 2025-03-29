import { Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: any) {
    return this.userService.findOrCreate(req.user);
  }

  @Get('premium-status')
  @UseGuards(JwtAuthGuard)
  async getPremiumStatus(@Req() req: any) {
    const user = await this.userService.getUserByAuth0Id(req.user.sub);
    return {
      isPremium: user?.isPremium,
      premiumExpiration: user?.premiumExpiration,
    };
  }

  @Put('upgrade-premium')
  @UseGuards(JwtAuthGuard)
  async upgradeToPremium(@Req() req: any) {
    return this.userService.upgradeToPremium(
      req.user.sub,
      new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    );
  }
}
