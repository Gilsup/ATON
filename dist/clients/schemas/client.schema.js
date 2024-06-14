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
exports.ClientSchema = exports.Client = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Client = class Client {
};
exports.Client = Client;
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], Client.prototype, "account", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Client.prototype, "surname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Client.prototype, "patronymic", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Client.prototype, "birthday", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Client.prototype, "INN", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true }),
    __metadata("design:type", String)
], Client.prototype, "responsible", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Не в работе' }),
    __metadata("design:type", String)
], Client.prototype, "status", void 0);
exports.Client = Client = __decorate([
    (0, mongoose_1.Schema)()
], Client);
exports.ClientSchema = mongoose_1.SchemaFactory.createForClass(Client);
//# sourceMappingURL=client.schema.js.map