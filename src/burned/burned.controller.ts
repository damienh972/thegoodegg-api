import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { BurnedService } from './burned.service';

@Controller('burned')
export class BurnedController {
  constructor(private readonly burnedService: BurnedService) {}

  @Post()
  async create(@Body('tokenIds') tokenIds: number[]) {
    return this.burnedService.createBurned(tokenIds);
  }

  @Get()
  async findAll() {
    return this.burnedService.getAllBurned();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body('tokenIdsToAdd') tokenIdsToAdd: number[],
    @Body('tokenIdsToRemove') tokenIdsToRemove: number[],
  ) {
    const numericId = parseInt(id, 10);
    return this.burnedService.updateBurned(
      numericId,
      tokenIdsToAdd,
      tokenIdsToRemove,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.burnedService.deleteBurned(numericId);
  }
}
