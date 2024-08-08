import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TempService } from './temp.service';
import { CreateTempDto } from './dto/create-temp.dto';
import { UpdateTempDto } from './dto/update-temp.dto';

@Controller('temp')
export class TempController {
  constructor(private readonly tempService: TempService) {}

  @Post()
  async create(@Body() createTempDto: CreateTempDto) {
    const userSaved = await this.tempService.create(createTempDto);
    return userSaved;
  }

  @Get()
  async findAll() {
    return await this.tempService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.tempService.findOne(+id);
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTempDto: UpdateTempDto) {
    const userUpdate = await this.tempService.update({
      ...updateTempDto,
      id: +id,
    });
    return userUpdate;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tempService.remove(+id);
  }
}
