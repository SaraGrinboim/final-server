import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { log } from 'console';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    constructor(){
        console.log('construct') ;
    }
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
