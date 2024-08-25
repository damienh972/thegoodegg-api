import { AnimusService } from './animus.service';
import { Prisma } from '@prisma/client';
export declare class AnimusController {
    private readonly animusService;
    constructor(animusService: AnimusService);
    create(data: Prisma.AnimusCreateInput[]): Promise<Prisma.BatchPayload>;
    findAll(page: number, limit: string): Promise<{
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
    findOne(id: number): Promise<{
        id: number;
        tokenId: string;
        species: string;
        generation: string;
        aura: string;
        element: string;
        type: string;
    }>;
    update(id: number, data: Prisma.AnimusUpdateInput): Promise<{
        id: number;
        tokenId: string;
        species: string;
        generation: string;
        aura: string;
        element: string;
        type: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        tokenId: string;
        species: string;
        generation: string;
        aura: string;
        element: string;
        type: string;
    }>;
}
