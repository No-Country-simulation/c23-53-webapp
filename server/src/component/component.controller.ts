import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ComponentService } from './component.service';
import { CreateComponentDto } from 'src/dto/component/create-component.dto';

import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Components')
@Controller('component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @Get()
  async findAll() {
    return await this.componentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.componentService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo componente' })
  @ApiResponse({
    status: 201,
    description: 'Documento subido y metadatos guardados',
    type: CreateComponentDto, // Cambia según el tipo de documento que se retorne
  })
  @ApiBody({
    description: 'Datos necesarios para crear un nuevo componente',
    type: CreateComponentDto,
    examples: {
      example1: {
        summary: 'Ejemplo de componente básico',
        value: {
          name: 'Button',
          installationCli: 'npm install my-button',
          properties: [
            { prop: 'size', type: 'string', default: 'medium' },
            { prop: 'color', type: 'string', default: 'blue' },
          ],
          usage: "<Button size='large' color='red' />",
        },
      },
    },
  })
  async create(@Body() createComponentDto: CreateComponentDto) {
    return await this.componentService.create(createComponentDto);
  }

  @Delete()
  async delete(@Param('id') id: string) {
    return await this.componentService.delete(id);
  }
}
