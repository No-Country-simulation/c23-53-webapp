import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class UpdateDocumentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  key?: string;

  @IsOptional()
  @IsString()
  bucket?: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsNumber()
  size?: number;

  @IsOptional()
  @IsString()
  contentType?: string;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
