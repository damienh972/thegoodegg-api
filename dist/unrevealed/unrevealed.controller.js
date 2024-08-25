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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnrevealedController = void 0;
const common_1 = require("@nestjs/common");
const unrevealed_service_1 = require("./unrevealed.service");
let UnrevealedController = class UnrevealedController {
    constructor(unrevealedService) {
        this.unrevealedService = unrevealedService;
    }
    async create(tokenIds) {
        return this.unrevealedService.createUnrevealed(tokenIds);
    }
    async findAll() {
        return this.unrevealedService.getAllUnrevealed();
    }
    async update(id, tokenIdsToAdd, tokenIdsToRemove) {
        const numericId = parseInt(id, 10);
        return this.unrevealedService.updateUnrevealed(numericId, tokenIdsToAdd, tokenIdsToRemove);
    }
    async remove(id) {
        const numericId = parseInt(id, 10);
        return this.unrevealedService.deleteUnrevealed(numericId);
    }
};
exports.UnrevealedController = UnrevealedController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('tokenIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UnrevealedController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnrevealedController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('tokenIdsToAdd')),
    __param(2, (0, common_1.Body)('tokenIdsToRemove')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Array]),
    __metadata("design:returntype", Promise)
], UnrevealedController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnrevealedController.prototype, "remove", null);
exports.UnrevealedController = UnrevealedController = __decorate([
    (0, common_1.Controller)('unrevealed'),
    __metadata("design:paramtypes", [unrevealed_service_1.UnrevealedService])
], UnrevealedController);
//# sourceMappingURL=unrevealed.controller.js.map