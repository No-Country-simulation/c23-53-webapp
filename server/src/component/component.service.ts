import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Component } from '../schemas/component.schema';

@Injectable()
export class ComponentService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Component.name) private componentModel: Model<Component>,
  ) {}

  async findAll() {
    return this.componentModel.find().exec();
  }

  async findOne(id: string) {
    const component = await this.componentModel.findById(id).exec();
    if (!component) {
      throw new NotFoundException(`Component with ID ${id} not found`);
    }
    return component;
  }

  async create(data: any) {
    const component = new this.componentModel(data);
    return await component.save();
  }

  async delete(id: string) {
    try {
      await this.componentModel.findOneAndDelete({ id });
    } catch (error) {
      throw new Error(`Error al actualizar la base de datos: ${error.message}`);
    }
  }
}
