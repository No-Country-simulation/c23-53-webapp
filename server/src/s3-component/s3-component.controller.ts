import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3ComponentService } from './s3-component.service';

@Controller('s3-component')
export class S3ComponentController {
  constructor(private readonly uploadService: S3ComponentService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    await this.uploadService.upload(file.originalname, file.buffer);
  }
}
