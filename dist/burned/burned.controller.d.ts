import { BurnedService } from './burned.service';
export declare class BurnedController {
    private readonly burnedService;
    constructor(burnedService: BurnedService);
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
