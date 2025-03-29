import { Module } from '@nestjs/common';
import { S3ComponentController } from './s3-component.controller';
import { S3ComponentService } from './s3-component.service';

@Module({
  controllers: [S3ComponentController],
  providers: [S3ComponentService],
})
export class S3ComponentModule {}
