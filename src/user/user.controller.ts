/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserSaveDto } from './dto/create-user.dto';
import { UserUpdateDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async create(@Body() user: UserSaveDto) {
    const userCopy = await this.userRepository.create(user);
    return userCopy;
  }

  @Get()
  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const user = await this.userRepository.findBy(+id);
    return user;
  }
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    await this.userRepository.delete(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: UserUpdateDto) {
    const userUpdate = await this.userRepository.update({
      ...user,
      id: +id,
    });

    return userUpdate;
  }
}
