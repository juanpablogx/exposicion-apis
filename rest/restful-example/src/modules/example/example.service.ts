import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { Example } from './example.interface'; // Importar la interfaz

@Injectable()
export class ExampleService {
  private examples: Example[] = []; // Usar la interfaz para tipar el array

  findAll() {
    return this.examples;
  }

  findOne(id: string) {
    return this.examples.find(example => example.id === id);
  }

  create(createExampleDto: CreateExampleDto) {
    const newExample: Example = { id: Date.now().toString(), ...createExampleDto };
    this.examples.push(newExample);
    return newExample;
  }

  update(id: string, updateExampleDto: UpdateExampleDto) {
    const exampleIndex = this.examples.findIndex(example => example.id === id);
    if (exampleIndex === -1) return null;

    this.examples[exampleIndex] = {
      ...this.examples[exampleIndex],
      ...updateExampleDto,
    };
    return this.examples[exampleIndex];
  }

  remove(id: string) {
    const exampleIndex = this.examples.findIndex(example => example.id === id);
    if (exampleIndex === -1) return null;

    const deletedExample = this.examples.splice(exampleIndex, 1);
    return deletedExample[0];
  }
}
