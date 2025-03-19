import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { ProtectedController } from './protected.controller'
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({}),
    UserModule
  ],
  controllers: [AuthController, ProtectedController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
