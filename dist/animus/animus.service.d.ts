import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class AnimusService {
    private prisma;
    constructor(prisma: PrismaService);
    createAnimus(data: Prisma.AnimusCreateInput[]): Promise<Prisma.BatchPayload>;
    getAllAnimus(page?: number, limit?: number): Promise<{
        data: {
            id: number;
            tokenId: string;
            species: string;
            generation: string;
            aura: string;
            element: string;
            type: string;
        }[];
        totalItems: number;
        totalPages: number;
        currentPage: number;
    }>;
    getAnimusById(id: number): Promise<{
        id: number;
        tokenId: string;
        species: string;
        generation: string;
        aura: string;
        element: string;
        type: string;
    }>;
    updateAnimus(id: number, data: Prisma.AnimusUpdateInput): Promise<{
        id: number;
        tokenId: string;
        species: string;
        generation: string;
        aura: string;
        element: string;
        type: string;
    }>;
    deleteAnimus(id: number): Promise<{
        id: number;
        tokenId: string;
        species: string;
        generation: string;
        aura: string;
        element: string;
        type: string;
    }>;
}
