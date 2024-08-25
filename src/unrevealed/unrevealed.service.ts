import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UnrevealedService {
  constructor(private prisma: PrismaService) {}

  async createUnrevealed(tokenIds: number[]) {
    return this.prisma.unrevealed.create({
      data: {
        tokenIds: JSON.stringify(tokenIds),
      },
    });
  }

  async getAllUnrevealed() {
    const unrevealedRecords = await this.prisma.unrevealed.findMany();
    return unrevealedRecords.map((record) => ({
      ...record,
      tokenIds: JSON.parse(record.tokenIds),
    }));
  }

  async updateUnrevealed(
    id: number,
    tokenIdsToAdd: number[],
    tokenIdsToRemove: number[],
  ) {
    const unrevealed = await this.prisma.unrevealed.findUnique({
      where: { id },
    });

    if (!unrevealed) {
      throw new Error(`No unrevealed record found for ID: ${id}`);
    }

    let currentTokenIds = JSON.parse(
      unrevealed.tokenIds || '[]',
    ) as number[];

    for (const tokenId of tokenIdsToAdd) {
      if (currentTokenIds.includes(tokenId)) {
        throw new ConflictException(`tokenId ${tokenId} already exists`);
      }
      currentTokenIds.push(tokenId);
    }

    currentTokenIds = currentTokenIds.filter(
      (tokenId) => !tokenIdsToRemove.includes(tokenId),
    );

    return this.prisma.unrevealed.update({
      where: { id },
      data: { tokenIds: JSON.stringify(currentTokenIds) },
    });
  }

  async deleteUnrevealed(id: number) {
    return this.prisma.unrevealed.delete({
      where: { id },
    });
  }
}
