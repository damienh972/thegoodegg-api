import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { UnrevealedService } from './unrevealed.service';

@Controller('unrevealed')
export class UnrevealedController {
  constructor(private readonly unrevealedService: UnrevealedService) {}

  @Post()
  async create(@Body('tokenIds') tokenIds: number[]) {
    return this.unrevealedService.createUnrevealed(tokenIds);
  }

  @Get()
  async findAll() {
    return this.unrevealedService.getAllUnrevealed();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body('tokenIdsToAdd') tokenIdsToAdd: number[],
    @Body('tokenIdsToRemove') tokenIdsToRemove: number[],
  ) {
    const numericId = parseInt(id, 10);
    return this.unrevealedService.updateUnrevealed(
      numericId,
      tokenIdsToAdd,
      tokenIdsToRemove,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.unrevealedService.deleteUnrevealed(numericId);
  }
}
