import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import User from './user.entity';
import { UserRepository } from './user.repository';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async create(@Body() user: User) {
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
    try {
      const user = await this.userRepository.findBy(+id);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    await this.userRepository.delete(+id);
  }
  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: User) {
    const userUpdate = await this.userRepository.update({
      ...user,
      id: +id,
    });

    return userUpdate;
  }
}
