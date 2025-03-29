import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty({
    example: 'myfile.pdf',
    description: 'El nombre del archivo',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: '123abc456',
    description: 'La clave única del archivo en el sistema de almacenamiento',
  })
  @IsString()
  key: string;

  @ApiProperty({
    example: 'my-bucket',
    description:
      'El nombre del bucket donde se almacena el archivo en el almacenamiento',
  })
  @IsString()
  bucket: string;

  @ApiProperty({
    example: 'https://my-bucket.s3.amazonaws.com/myfile.pdf',
    description: 'URL pública del archivo si está disponible',
    required: false, // Hace este campo opcional en la UI de Swagger
  })
  @IsOptional()
  @IsString()
  url?: string;

  @ApiProperty({
    example: 1024,
    description: 'El tamaño del archivo en bytes',
  })
  @IsNumber()
  size: number;

  @ApiProperty({
    example: 'application/pdf',
    description: 'Tipo MIME del archivo',
  })
  @IsString()
  contentType: string;
}
