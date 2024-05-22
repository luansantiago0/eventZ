import {
  IsNotEmpty,
  IsString,
  IsUrl,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateEventDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @IsNotEmpty({ message: 'A descrição não pode ser vazio' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'O valor não pode está vazio' })
  @IsNumber()
  price: number;

  @IsOptional({ message: 'Desconto opcional!' })
  @IsNumber()
  discount: number;

  @IsOptional()
  @IsString()
  companyId: string;

  @IsOptional()
  @IsString()
  categoryId: number;
}
