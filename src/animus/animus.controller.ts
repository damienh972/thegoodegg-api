import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { AnimusService } from './animus.service';
import { Prisma } from '@prisma/client';

@Controller('animus')
export class AnimusController {
  constructor(private readonly animusService: AnimusService) {}

  @Post()
  async create(@Body() data: Prisma.AnimusCreateInput[]) {
    return this.animusService.createAnimus(data);
  }

  @Get()
  async findAll(@Query('page') page: number, @Query('limit') limit: string) {
    const numberLimit = parseInt(limit,)
    return this.animusService.getAllAnimus(page, numberLimit);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.animusService.getAnimusById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.AnimusUpdateInput,
  ) {
    return this.animusService.updateAnimus(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.animusService.deleteAnimus(id);
  }
}
