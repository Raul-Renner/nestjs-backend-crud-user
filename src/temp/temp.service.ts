import { Injectable } from '@nestjs/common';
import { CreateTempDto } from './dto/create-temp.dto';
import { UpdateTempDto } from './dto/update-temp.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class TempService {
  constructor(private prismaService: PrismaService) {}

  async create(createTempDto: CreateTempDto) {
    return this.prismaService.temp.create({
      data: createTempDto as any,
    });
  }

  async findAll() {
    return this.prismaService.temp.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.temp.findUnique({
      where: { id },
    });
  }

  async update(updateTempDto: UpdateTempDto) {
    if (!updateTempDto.id) throw new Error('User not found!');
    return this.prismaService.temp.update({
      where: { id: updateTempDto.id },
      data: updateTempDto as any,
    });
  }

  async remove(id: number) {
    return this.prismaService.temp.delete({
      where: { id: id },
    });
  }
}
