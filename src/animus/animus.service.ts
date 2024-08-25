import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class AnimusService {
  constructor(private prisma: PrismaService) {}

  async createAnimus(data: Prisma.AnimusCreateInput[]) {
    return this.prisma.animus.createMany({
      data: data,
      skipDuplicates: true,
    });
  }

  async getAllAnimus(page: number = 1, limit: number = 100) {
    const offset = (page - 1) * limit;

    // Effectue deux requêtes à la base de données en parallèle
    const [data, totalItems] = await Promise.all([
      this.prisma.animus.findMany({
        skip: offset,
        take: limit,
      }),
      this.prisma.animus.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return {
      data,
      totalItems,
      totalPages,
      currentPage: page,
    };
  }

  async getAnimusById(id: number) {
    return this.prisma.animus.findUnique({
      where: { id },
    });
  }

  async updateAnimus(id: number, data: Prisma.AnimusUpdateInput) {
    return this.prisma.animus.update({
      where: { id },
      data: {
        species: data.species,
        generation: data.generation,
        aura: data.aura,
        element: data.element,
      },
    });
  }

  async deleteAnimus(id: number) {
    return this.prisma.animus.delete({
      where: { id },
    });
  }
}
