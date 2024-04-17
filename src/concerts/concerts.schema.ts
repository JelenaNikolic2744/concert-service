import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConcertDocument = Concert & Document;

@Schema()
export class Concert {
  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: String, required: true })
  startTime: string;

  @Prop({ type: String, required: true })
  place: string;

  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String })
  departure: string;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);
