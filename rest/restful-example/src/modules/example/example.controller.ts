import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { ExampleResponseDto } from './dto/example-response.dto';

@ApiTags('example')
@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @ApiOperation({
    summary: 'Obtener todos los objetos',
    description: 'Este endpoint devuelve una lista de todos los objetos almacenados.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de objetos obtenida exitosamente.',
    type: [ExampleResponseDto], // Respuesta esperada como un array de objetos
  })
  @Get('get-objects')
  findAll() {
    return this.exampleService.findAll();
  }

  @ApiOperation({
    summary: 'Buscar un objeto por ID',
    description: 'Este endpoint devuelve un objeto específico basado en el ID proporcionado.',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID del objeto a buscar',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Objeto encontrado exitosamente.',
    type: ExampleResponseDto, // Respuesta esperada como un objeto
  })
  @Get('search-objects/:id')
  findOne(@Param('id') id: string) {
    return this.exampleService.findOne(id);
  }

  @ApiOperation({
    summary: 'Crear un nuevo objeto',
    description: 'Este endpoint permite crear un nuevo objeto con los datos proporcionados.',
  })
  @ApiBody({
    type: CreateExampleDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Objeto creado exitosamente.',
    type: ExampleResponseDto, // Respuesta esperada como un objeto
  })
  @Post('save-object')
  create(@Body() createExampleDto: CreateExampleDto) {
    return this.exampleService.create(createExampleDto);
  }

  @ApiOperation({
    summary: 'Actualizar un objeto existente',
    description: 'Este endpoint permite actualizar un objeto existente basado en el ID proporcionado.',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID del objeto a actualizar',
    type: String,
  })
  @ApiBody({
    type: UpdateExampleDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Objeto actualizado exitosamente.',
    type: ExampleResponseDto, // Respuesta esperada como un objeto
  })
  @Put('update-object/:id')
  update(@Param('id') id: string, @Body() updateExampleDto: UpdateExampleDto) {
    return this.exampleService.update(id, updateExampleDto);
  }

  @ApiOperation({
    summary: 'Eliminar un objeto',
    description: 'Este endpoint permite eliminar un objeto basado en el ID proporcionado.',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID del objeto a eliminar',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Objeto eliminado exitosamente.',
    type: ExampleResponseDto, // Respuesta esperada como un objeto
  })
  @Delete('delete-object/:id')
  remove(@Param('id') id: string) {
    return this.exampleService.remove(id);
  }
}
