import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaypalService {
  private readonly paypalApiUrl =
    this.configService.getOrThrow('PAYPAL_API_URL');
  private readonly clientId = this.configService.getOrThrow('PAYPAL_CLIENT_ID');
  private readonly clientSecret = this.configService.getOrThrow(
    'PAYPAL_CLIENT_SECRET',
  );

  constructor(private readonly configService: ConfigService) {}
  //Access Token de PayPal
  private async getAccessToken(): Promise<string> {
    const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString(
      'base64',
    );

    try {
      const response = await axios.post(
        `${this.paypalApiUrl}/v1/oauth2/token`,
        'grant_type=client_credentials',
        {
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      return response.data.access_token;
    } catch (error) {
      throw new HttpException(
        'Error obteniendo el token de PayPal',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  //Crear una orden de pago en PayPal
  async createOrder(amount: number, currency: string) {
    const accessToken = await this.getAccessToken();

    const orderData = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount.toFixed(2),
          },
        },
      ],
      application_context: {
        return_url: 'http://localhost:3000/paypal/success', // Redirige después del pago exitoso
        cancel_url: 'http://localhost:3000/paypal/cancel', // Redirige si el usuario cancela
      },
    };

    try {
      const response = await axios.post(
        `${this.paypalApiUrl}/v2/checkout/orders`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data; // Devuelve la orden creada con su ID
    } catch (error) {
      throw new HttpException(
        'Error creando orden en PayPal',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Capturar el pago después de que el usuario pague en PayPal
  async capturePayment(orderId: string) {
    const accessToken = await this.getAccessToken();

    try {
      const response = await axios.post(
        `${this.paypalApiUrl}/v2/checkout/orders/${orderId}/capture`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error capturando el pago en PayPal',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
