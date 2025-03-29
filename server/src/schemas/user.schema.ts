import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  auth0Id: string; // ID único de Auth0

  @Prop({ required: true, unique: true })
  email: string; // Correo electrónico

  @Prop()
  name: string; // Nombre del usuario

  @Prop({ default: false })
  isPremium: boolean; // Indica si es un usuario premium

  @Prop({ type: Date })
  premiumExpiration?: Date; // Fecha de expiración de la suscripción (opcional)
}

export const UserSchema = SchemaFactory.createForClass(User);
