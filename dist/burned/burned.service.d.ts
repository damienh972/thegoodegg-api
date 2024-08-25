import { PrismaService } from '../prisma/prisma.service';
export declare class BurnedService {
    private prisma;
    constructor(prisma: PrismaService);
    createBurned(tokenIds: number[]): Promise<{
        id: number;
        tokenIds: string;
    }>;
    getAllBurned(): Promise<{
        tokenIds: any;
        id: number;
    }[]>;
    updateBurned(id: number, tokenIdsToAdd: number[], tokenIdsToRemove: number[]): Promise<{
        id: number;
        tokenIds: string;
    }>;
    deleteBurned(id: number): Promise<{
        id: number;
        tokenIds: string;
    }>;
}
