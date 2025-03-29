import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // Esto agrega "createdAt" y "updatedAt" automáticamente
export class DocumentFile extends Document {
  @Prop({ required: true }) // El nombre del archivo
  name: string;

  @Prop({ required: true, unique: true }) // Clave única en S3
  key: string;

  @Prop({ required: true }) // Nombre del bucket donde se almacena en S3
  bucket: string;

  @Prop() // La URL es opcional (puede ser pública o firmada)
  url?: string;

  @Prop({ required: true }) // Tamaño del archivo en bytes
  size: number;

  @Prop({ required: true }) // Tipo de archivo (MIME Type)
  contentType: string;
}

// Generamos el Schema de Mongoose a partir de la clase
export const DocumentFileSchema = SchemaFactory.createForClass(DocumentFile);
