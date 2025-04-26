"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceitosManualModule = void 0;
const common_1 = require("@nestjs/common");
const conceito_manual_controller_1 = require("./conceito-manual.controller");
const conceitos_manual_service_1 = require("./conceitos-manual.service");
let ConceitosManualModule = class ConceitosManualModule {
};
exports.ConceitosManualModule = ConceitosManualModule;
exports.ConceitosManualModule = ConceitosManualModule = __decorate([
    (0, common_1.Module)({
        controllers: [conceito_manual_controller_1.ConceitosManualController],
        providers: [conceitos_manual_service_1.ConceitosManualService]
    })
], ConceitosManualModule);
//# sourceMappingURL=conceitos-manual.module.js.map