import { Module } from '@nestjs/common';
import { AnimusService } from './animus.service';
import { AnimusController } from './animus.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  providers: [AnimusService, PrismaService],
  controllers: [AnimusController],
})
export class AnimusModule {}
