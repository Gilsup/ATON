import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ unique: true })
  Full_name: string;

  @Prop()
  login: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User).index(
  { login: 1, password: 1 },
  { unique: true },
);
