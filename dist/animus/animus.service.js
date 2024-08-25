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
exports.AnimusService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AnimusService = class AnimusService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAnimus(data) {
        return this.prisma.animus.createMany({
            data: data,
            skipDuplicates: true,
        });
    }
    async getAllAnimus(page = 1, limit = 100) {
        const offset = (page - 1) * limit;
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
    async getAnimusById(id) {
        return this.prisma.animus.findUnique({
            where: { id },
        });
    }
    async updateAnimus(id, data) {
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
    async deleteAnimus(id) {
        return this.prisma.animus.delete({
            where: { id },
        });
    }
};
exports.AnimusService = AnimusService;
exports.AnimusService = AnimusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnimusService);
//# sourceMappingURL=animus.service.js.map