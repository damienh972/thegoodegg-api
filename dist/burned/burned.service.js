"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurnedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BurnedService = class BurnedService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBurned(tokenIds) {
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
    async updateBurned(id, tokenIdsToAdd, tokenIdsToRemove) {
        const burned = await this.prisma.burned.findUnique({ where: { id } });
        if (!burned) {
            throw new Error(`No burned record found for ID: ${id}`);
        }
        let currentTokenIds = JSON.parse(burned.tokenIds || '[]');
        for (const tokenId of tokenIdsToAdd) {
            if (currentTokenIds.includes(tokenId)) {
                throw new common_1.ConflictException(`tokenId ${tokenId} already exists`);
            }
            currentTokenIds.push(tokenId);
        }
        currentTokenIds = currentTokenIds.filter((tokenId) => !tokenIdsToRemove.includes(tokenId));
        return this.prisma.burned.update({
            where: { id },
            data: { tokenIds: JSON.stringify(currentTokenIds) },
        });
    }
    async deleteBurned(id) {
        return this.prisma.burned.delete({
            where: { id },
        });
    }
};
exports.BurnedService = BurnedService;
exports.BurnedService = BurnedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BurnedService);
//# sourceMappingURL=burned.service.js.map