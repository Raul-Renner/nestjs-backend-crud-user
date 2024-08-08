/* eslint-disable prettier/prettier */
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserUpdateDto {
  @IsNotEmpty()
  @IsString()
 readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Por favor, insira um email corretamente' })
  readonly email: string;

  @IsBoolean()
  readonly isActive?: boolean;
}
