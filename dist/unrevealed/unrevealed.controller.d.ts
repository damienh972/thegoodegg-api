import { UnrevealedService } from './unrevealed.service';
export declare class UnrevealedController {
    private readonly unrevealedService;
    constructor(unrevealedService: UnrevealedService);
    create(tokenIds: number[]): Promise<{
        id: number;
        tokenIds: string;
    }>;
    findAll(): Promise<{
        tokenIds: any;
        id: number;
    }[]>;
    update(id: string, tokenIdsToAdd: number[], tokenIdsToRemove: number[]): Promise<{
        id: number;
        tokenIds: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        tokenIds: string;
    }>;
}
