import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { DocumentFile } from '../schemas/s3-document.schema';
import { CreateDocumentDto } from 'src/dto/create-document.dto';

@Injectable()
export class S3DocumentService {
  private readonly s3Region = this.configService.getOrThrow('AWS_S3_REGION');
  private readonly bucketName = this.configService.getOrThrow(
    'AWS_S3_BACKET_DOCUMENT',
  );

  private readonly s3Client = new S3Client({
    region: this.s3Region,
  });

  constructor(
    private readonly configService: ConfigService,
    @InjectModel(DocumentFile.name)
    private documentFileModel: Model<DocumentFile>,
  ) {}

  async findAll(): Promise<DocumentFile[]> {
    return this.documentFileModel.find().exec();
  }

  async findOne(id: string): Promise<DocumentFile> {
    const document = await this.documentFileModel.findById(id).exec();
    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }
    return document;
  }

  // Subir archivo a AWS S3 usando el PutObjectCommand
  async uploadToS3(file: Express.Multer.File) {
    const key = `uploads/${file.originalname}-${Date.now()}`;

    try {
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      });

      const respuesta = await this.s3Client.send(command);
      console.log(respuesta);

      // Rresultado de la subida (Key, Bucket, y URL pública)
      return {
        Bucket: this.bucketName,
        Key: key,
        Location: `https://${this.bucketName}.s3.${this.s3Region}.amazonaws.com/${key}`,
      };
    } catch (error) {
      throw new Error(`Error al subir el archivo a S3: ${error.message}`);
    }
  }

  // Guardar metadatos del archivo en MongoDB
  async saveFileMetadata(data: CreateDocumentDto): Promise<DocumentFile> {
    const document = new this.documentFileModel(data);
    return await document.save();
  }

  async deleteFileFromS3(key: string): Promise<void> {
    try {
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });
      await this.s3Client.send(command);
      console.log(`Archivo eliminado de S3: ${key}`);
    } catch (error) {
      throw new Error(`Error al eliminar el archivo de S3: ${error.message}`);
    }
  }

  async updateFileMetadata(key: string): Promise<void> {
    try {
      await this.documentFileModel.findOneAndDelete({ key });
      console.log(
        `Registro eliminado de la base de datos para la clave: ${key}`,
      );
    } catch (error) {
      throw new Error(`Error al actualizar la base de datos: ${error.message}`);
    }
  }

  /*
    delete(id: string) {
        return this.documentFileModel.findByIdAndDelete(id)
    }
    */
}
