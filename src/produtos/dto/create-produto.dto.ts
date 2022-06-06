import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  preco: string;

  @IsBoolean()
  disponivel: boolean;

  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;
}