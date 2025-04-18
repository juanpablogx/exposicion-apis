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
exports.ExampleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const example_service_1 = require("./example.service");
const create_example_dto_1 = require("./dto/create-example.dto");
const update_example_dto_1 = require("./dto/update-example.dto");
const example_response_dto_1 = require("./dto/example-response.dto");
let ExampleController = class ExampleController {
    exampleService;
    constructor(exampleService) {
        this.exampleService = exampleService;
    }
    findAll() {
        return this.exampleService.findAll();
    }
    findOne(id) {
        return this.exampleService.findOne(id);
    }
    create(createExampleDto) {
        return this.exampleService.create(createExampleDto);
    }
    update(id, updateExampleDto) {
        return this.exampleService.update(id, updateExampleDto);
    }
    remove(id) {
        return this.exampleService.remove(id);
    }
};
exports.ExampleController = ExampleController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener todos los objetos',
        description: 'Este endpoint devuelve una lista de todos los objetos almacenados.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de objetos obtenida exitosamente.',
        type: [example_response_dto_1.ExampleResponseDto],
    }),
    (0, common_1.Get)('get-objects'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Buscar un objeto por ID',
        description: 'Este endpoint devuelve un objeto específico basado en el ID proporcionado.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'ID del objeto a buscar',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Objeto encontrado exitosamente.',
        type: example_response_dto_1.ExampleResponseDto,
    }),
    (0, common_1.Get)('search-objects/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear un nuevo objeto',
        description: 'Este endpoint permite crear un nuevo objeto con los datos proporcionados.',
    }),
    (0, swagger_1.ApiBody)({
        type: create_example_dto_1.CreateExampleDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Objeto creado exitosamente.',
        type: example_response_dto_1.ExampleResponseDto,
    }),
    (0, common_1.Post)('save-object'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_example_dto_1.CreateExampleDto]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Actualizar un objeto existente',
        description: 'Este endpoint permite actualizar un objeto existente basado en el ID proporcionado.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'ID del objeto a actualizar',
        type: String,
    }),
    (0, swagger_1.ApiBody)({
        type: update_example_dto_1.UpdateExampleDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Objeto actualizado exitosamente.',
        type: example_response_dto_1.ExampleResponseDto,
    }),
    (0, common_1.Put)('update-object/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_example_dto_1.UpdateExampleDto]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar un objeto',
        description: 'Este endpoint permite eliminar un objeto basado en el ID proporcionado.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'ID del objeto a eliminar',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Objeto eliminado exitosamente.',
        type: example_response_dto_1.ExampleResponseDto,
    }),
    (0, common_1.Delete)('delete-object/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "remove", null);
exports.ExampleController = ExampleController = __decorate([
    (0, swagger_1.ApiTags)('example'),
    (0, common_1.Controller)('example'),
    __metadata("design:paramtypes", [example_service_1.ExampleService])
], ExampleController);
//# sourceMappingURL=example.controller.js.map