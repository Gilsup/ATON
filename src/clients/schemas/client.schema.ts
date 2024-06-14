import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Client {
  @Prop({})
  account: string;

  @Prop()
  surname: string;

  @Prop()
  name: string;

  @Prop()
  patronymic: string;

  @Prop()
  birthday: Date;

  @Prop()
  INN: string;

  @Prop({ index: true })
  responsible: string;

  @Prop({ default: 'Не в работе' })
  status: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
