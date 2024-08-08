/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateTempDto {
  id?: number;

  @IsNotEmpty({ message: "O Campo nome não pode ser válido"})
  name: string;

  @IsNotEmpty({ message: "Campo email nao pode ser vazio"})
  @IsEmail({}, { message: "Insira um email válido" })
  email: string;
}
