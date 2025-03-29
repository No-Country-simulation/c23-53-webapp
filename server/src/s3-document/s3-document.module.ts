import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { S3DocumentService } from './s3-document.service';
import { S3DocumentController } from './s3-document.controller';
import {
  DocumentFile,
  DocumentFileSchema,
} from '../schemas/s3-document.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DocumentFile.name,
        schema: DocumentFileSchema,
      },
    ]),
  ],
  providers: [S3DocumentService],
  controllers: [S3DocumentController],
})
export class S3DocumentModule {}
