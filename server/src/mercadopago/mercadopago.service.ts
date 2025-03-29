import { Injectable } from '@nestjs/common';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

dotenv.config();

@Injectable()
export class MercadoPagoService {
  private client: MercadoPagoConfig;
  private payment: Payment;

  private readonly mp_access_token =
    this.configService.getOrThrow('MP_ACCESS_TOKEN');

  constructor(private readonly configService: ConfigService) {
    // Configurar Mercado Pago usando el SDK oficial
    this.client = new MercadoPagoConfig({
      accessToken: this.mp_access_token, // Acceder al Access Token desde variables de entorno
      options: { timeout: 5000, idempotencyKey: 'unique-key' }, // Opcional
    });

    this.payment = new Payment(this.client);
  }

  // Método para crear un pago
  async createPayment(
    amount: number,
    email: string,
    description: string,
    paymentMethod: string,
  ) {
    try {
      const body = {
        transaction_amount: amount,
        description,
        payment_method_id: paymentMethod, // Ej: "visa", "master", "pix"
        payer: { email },
      };

      const response = await this.payment.create({ body });
      return response;
    } catch (error) {
      throw new Error(`Error en el pago: ${error.message}`);
    }
  }

  // Obtener el estado de un pago
  async getPaymentStatus(paymentId: string) {
    try {
      const response = await this.payment.get({ id: paymentId });
      return response;
    } catch (error) {
      throw new Error(`Error al obtener estado del pago: ${error.message}`);
    }
  }
}
