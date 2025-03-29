import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plan, PlanDocument } from '../schemas/plan.schema';
import { CreatePlanDto, UpdatePlanDto } from '../dto/plan/plan.dto';

@Injectable()
export class PlanService {
  constructor(@InjectModel(Plan.name) private planModel: Model<PlanDocument>) {}

  async create(createPlanDto: CreatePlanDto): Promise<Plan> {
    const plan = new this.planModel(createPlanDto);
    return plan.save();
  }

  async findAll(): Promise<Plan[]> {
    return this.planModel.find().exec();
  }

  async findOne(id: string): Promise<Plan> {
    const plan = await this.planModel.findById(id);
    if (!plan) {
      throw new NotFoundException('Plan not found');
    }
    return plan;
  }

  async findByName(name: string): Promise<Plan> {
    const plan = await this.planModel.findOne({ name }).exec();
    if (!plan) {
      throw new NotFoundException(`Plan with name "${name}" not found`);
    }
    return plan;
  }

  async update(id: string, updatePlanDto: UpdatePlanDto): Promise<Plan> {
    const updatedPlan = await this.planModel.findByIdAndUpdate(
      id,
      updatePlanDto,
      { new: true },
    );
    if (!updatedPlan) {
      throw new NotFoundException('Plan not found');
    }
    return updatedPlan;
  }

  async remove(id: string): Promise<void> {
    const result = await this.planModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('Plan not found');
    }
  }
}
