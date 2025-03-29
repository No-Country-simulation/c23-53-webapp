import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3DocumentService } from './s3-document.service';
import { CreateDocumentDto } from 'src/dto/create-document.dto';
import { DocumentFile } from 'src/schemas/s3-document.schema';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('S3-Document')
@Controller('s3-document')
export class S3DocumentController {
  constructor(private readonly s3DocumentService: S3DocumentService) {}

  @Get()
  @ApiOperation({
    summary: 'Obtener todos los documentos',
    description:
      'Este endpoint devuelve una lista de todos los documentos almacenados en la base de datos junto con sus metadatos.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de documentos recuperada exitosamente',
    type: [CreateDocumentDto],
  })
  @ApiResponse({
    status: 500,
    description: 'Error interno del servidor',
  })
  async findAll(): Promise<DocumentFile[]> {
    return await this.s3DocumentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.s3DocumentService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({
    summary:
      'Subir un archivo a AWS S3 y guardar los metadatos en la base de datos',
  })
  @ApiConsumes('multipart/form-data') // Especifica que el cuerpo de la petición es 'multipart/form-data'
  @ApiBody({
    description: 'Documento y metadatos del archivo',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Documento subido y metadatos guardados',
    type: CreateDocumentDto, // Cambia según el tipo de documento que se retorne
  })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() createDocumentDto: CreateDocumentDto,
  ) {
    //Subir archivo a AWS S3
    const uploadResult = await this.s3DocumentService.uploadToS3(file);

    //Guardar en DB
    const savedDocument = await this.s3DocumentService.saveFileMetadata({
      name: file.originalname,
      key: uploadResult.Key,
      bucket: uploadResult.Bucket,
      url: uploadResult.Location,
      size: file.size,
      contentType: file.mimetype,
    });

    // Retornar el documento guardado
    return savedDocument;
  }

  @Delete(':key')
  async deleteFile(@Param('key') key: string): Promise<void> {
    await this.s3DocumentService.deleteFileFromS3(key);
    return this.s3DocumentService.updateFileMetadata(key);
  }

  /*
    @Put()
    upadate() {
        return 'Put document'
    }
    */
}
