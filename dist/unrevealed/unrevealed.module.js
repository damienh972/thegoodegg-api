"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnrevealedModule = void 0;
const common_1 = require("@nestjs/common");
const unrevealed_service_1 = require("./unrevealed.service");
const unrevealed_controller_1 = require("./unrevealed.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let UnrevealedModule = class UnrevealedModule {
};
exports.UnrevealedModule = UnrevealedModule;
exports.UnrevealedModule = UnrevealedModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [unrevealed_service_1.UnrevealedService, prisma_service_1.PrismaService],
        controllers: [unrevealed_controller_1.UnrevealedController],
    })
], UnrevealedModule);
//# sourceMappingURL=unrevealed.module.js.map