"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimusModule = void 0;
const common_1 = require("@nestjs/common");
const animus_service_1 = require("./animus.service");
const animus_controller_1 = require("./animus.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let AnimusModule = class AnimusModule {
};
exports.AnimusModule = AnimusModule;
exports.AnimusModule = AnimusModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [animus_service_1.AnimusService, prisma_service_1.PrismaService],
        controllers: [animus_controller_1.AnimusController],
    })
], AnimusModule);
//# sourceMappingURL=animus.module.js.map