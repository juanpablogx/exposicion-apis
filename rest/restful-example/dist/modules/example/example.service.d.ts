import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { Example } from './example.interface';
export declare class ExampleService {
    private examples;
    findAll(): Example[];
    findOne(id: string): Example | undefined;
    create(createExampleDto: CreateExampleDto): Example;
    update(id: string, updateExampleDto: UpdateExampleDto): Example | null;
    remove(id: string): Example | null;
}
