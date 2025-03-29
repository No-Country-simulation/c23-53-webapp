import { IsString, IsNumber, Min, IsEnum } from 'class-validator';

export class CreatePlanDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsEnum(['USD', 'EUR', 'MXN'])
  currency: string;
}

export class UpdatePlanDto {
  @IsString()
  name?: string;

  @IsNumber()
  @Min(0)
  price?: number;

  @IsEnum(['USD', 'EUR', 'MXN'])
  currency?: string;
}
