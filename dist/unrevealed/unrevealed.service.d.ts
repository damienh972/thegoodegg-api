import { PrismaService } from '../prisma/prisma.service';
export declare class UnrevealedService {
    private prisma;
    constructor(prisma: PrismaService);
    createUnrevealed(tokenIds: number[]): Promise<{
        id: number;
        tokenIds: string;
    }>;
    getAllUnrevealed(): Promise<{
        tokenIds: any;
        id: number;
    }[]>;
    updateUnrevealed(id: number, tokenIdsToAdd: number[], tokenIdsToRemove: number[]): Promise<{
        id: number;
        tokenIds: string;
    }>;
    deleteUnrevealed(id: number): Promise<{
        id: number;
        tokenIds: string;
    }>;
}
