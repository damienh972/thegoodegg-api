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
exports.UnrevealedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UnrevealedService = class UnrevealedService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUnrevealed(tokenIds) {
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
    async updateUnrevealed(id, tokenIdsToAdd, tokenIdsToRemove) {
        const unrevealed = await this.prisma.unrevealed.findUnique({
            where: { id },
        });
        if (!unrevealed) {
            throw new Error(`No unrevealed record found for ID: ${id}`);
        }
        let currentTokenIds = JSON.parse(unrevealed.tokenIds || '[]');
        for (const tokenId of tokenIdsToAdd) {
            if (currentTokenIds.includes(tokenId)) {
                throw new common_1.ConflictException(`tokenId ${tokenId} already exists`);
            }
            currentTokenIds.push(tokenId);
        }
        currentTokenIds = currentTokenIds.filter((tokenId) => !tokenIdsToRemove.includes(tokenId));
        return this.prisma.unrevealed.update({
            where: { id },
            data: { tokenIds: JSON.stringify(currentTokenIds) },
        });
    }
    async deleteUnrevealed(id) {
        return this.prisma.unrevealed.delete({
            where: { id },
        });
    }
};
exports.UnrevealedService = UnrevealedService;
exports.UnrevealedService = UnrevealedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UnrevealedService);
//# sourceMappingURL=unrevealed.service.js.map