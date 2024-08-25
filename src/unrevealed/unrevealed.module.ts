import { Module } from '@nestjs/common';
import { UnrevealedService } from './unrevealed.service';
import { UnrevealedController } from './unrevealed.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  providers: [UnrevealedService, PrismaService],
  controllers: [UnrevealedController],
})
export class UnrevealedModule {}
