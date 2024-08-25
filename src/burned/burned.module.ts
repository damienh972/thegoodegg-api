import { Module } from '@nestjs/common';
import { BurnedService } from './burned.service';
import { BurnedController } from './burned.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  providers: [BurnedService, PrismaService],
  controllers: [BurnedController],
})
export class BurnedModule {}
