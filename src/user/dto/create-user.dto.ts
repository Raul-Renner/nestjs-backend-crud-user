/* eslint-disable prettier/prettier */
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserSaveDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail({}, { message: "Por favor, insira um email corretamente" })
    email: string;

    @IsNotEmpty()
    @IsString()
    password?: string;

    @IsBoolean()
    isActive?: boolean;
}