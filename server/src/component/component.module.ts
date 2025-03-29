import { Module } from '@nestjs/common';
import { ComponentService } from './component.service';
import { ComponentController } from './component.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Component, ComponentSchema } from 'src/schemas/component.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Component.name,
        schema: ComponentSchema,
      },
    ]),
  ],
  providers: [ComponentService],
  controllers: [ComponentController],
})
export class ComponentModule {}
