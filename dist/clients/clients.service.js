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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const client_schema_1 = require("./schemas/client.schema");
let ClientsService = class ClientsService {
    constructor(clientsModel) {
        this.clientsModel = clientsModel;
    }
    async get(fullName) {
        return await this.clientsModel.find({ responsible: fullName });
    }
    async updateStatus(props) {
        const { id, status } = props;
        if (status === 'В работе' ||
            status === 'Отказ' ||
            status === 'Сделка закрыта') {
            return await this.clientsModel.findByIdAndUpdate(id, { status: status });
        }
        else {
            throw new common_1.HttpException('Invalid status', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(client_schema_1.Client.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientsService);
//# sourceMappingURL=clients.service.js.map