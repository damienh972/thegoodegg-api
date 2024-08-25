import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BurnedService {
  constructor(private prisma: PrismaService) {}

  async createBurned(tokenIds: number[]) {
    return this.prisma.burned.create({
      data: {
        tokenIds: JSON.stringify(tokenIds),
      },
    });
  }

  async getAllBurned() {
    const burnedRecords = await this.prisma.burned.findMany();
    return burnedRecords.map((record) => ({
      ...record,
      tokenIds: JSON.parse(record.tokenIds),
    }));
  }

  async updateBurned(
    id: number,
    tokenIdsToAdd: number[],
    tokenIdsToRemove: number[],
  ) {
    const burned = await this.prisma.burned.findUnique({ where: { id } });

    if (!burned) {
      throw new Error(`No burned record found for ID: ${id}`);
    }

    let currentTokenIds = JSON.parse(burned.tokenIds || '[]') as number[];

    for (const tokenId of tokenIdsToAdd) {
      if (currentTokenIds.includes(tokenId)) {
        throw new ConflictException(`tokenId ${tokenId} already exists`);
      }
      currentTokenIds.push(tokenId);
    }

    currentTokenIds = currentTokenIds.filter(
      (tokenId) => !tokenIdsToRemove.includes(tokenId),
    );

    return this.prisma.burned.update({
      where: { id },
      data: { tokenIds: JSON.stringify(currentTokenIds) },
    });
  }

  async deleteBurned(id: number) {
    return this.prisma.burned.delete({
      where: { id },
    });
  }
}
