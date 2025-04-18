"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleService = void 0;
const common_1 = require("@nestjs/common");
let ExampleService = class ExampleService {
    examples = [];
    findAll() {
        return this.examples;
    }
    findOne(id) {
        return this.examples.find(example => example.id === id);
    }
    create(createExampleDto) {
        const newExample = { id: Date.now().toString(), ...createExampleDto };
        this.examples.push(newExample);
        return newExample;
    }
    update(id, updateExampleDto) {
        const exampleIndex = this.examples.findIndex(example => example.id === id);
        if (exampleIndex === -1)
            return null;
        this.examples[exampleIndex] = {
            ...this.examples[exampleIndex],
            ...updateExampleDto,
        };
        return this.examples[exampleIndex];
    }
    remove(id) {
        const exampleIndex = this.examples.findIndex(example => example.id === id);
        if (exampleIndex === -1)
            return null;
        const deletedExample = this.examples.splice(exampleIndex, 1);
        return deletedExample[0];
    }
};
exports.ExampleService = ExampleService;
exports.ExampleService = ExampleService = __decorate([
    (0, common_1.Injectable)()
], ExampleService);
//# sourceMappingURL=example.service.js.map