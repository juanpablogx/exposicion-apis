import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
export declare class ExampleController {
    private readonly exampleService;
    constructor(exampleService: ExampleService);
    findAll(): import("./example.interface").Example[];
    findOne(id: string): import("./example.interface").Example | undefined;
    create(createExampleDto: CreateExampleDto): import("./example.interface").Example;
    update(id: string, updateExampleDto: UpdateExampleDto): import("./example.interface").Example | null;
    remove(id: string): import("./example.interface").Example | null;
}
