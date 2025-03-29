import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { MercadoPagoService } from './mercadopago.service';

@Controller('mercadopago')
export class MercadoPagoController {
  constructor(private readonly mercadoPagoService: MercadoPagoService) {}

  @Post('pay')
  async createPayment(
    @Body()
    body: {
      amount: number;
      email: string;
      description: string;
      paymentMethod: string;
    },
  ) {
    return await this.mercadoPagoService.createPayment(
      body.amount,
      body.email,
      body.description,
      body.paymentMethod,
    );
  }

  @Get('status')
  async getPaymentStatus(@Query('id') id: string) {
    return await this.mercadoPagoService.getPaymentStatus(id);
  }
}
