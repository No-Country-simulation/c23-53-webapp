import {
  IsString,
  IsArray,
  IsOptional,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

class PropertyDto {
  @IsString()
  prop: string;

  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  default?: string;
}

export class CreateComponentDto {
  @IsString()
  name: string;

  @IsString()
  installationCli: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PropertyDto)
  @ArrayMinSize(1) // Asegura que al menos haya una propiedad en el array
  properties: PropertyDto[];

  @IsOptional()
  @IsString()
  usage?: string;
}
