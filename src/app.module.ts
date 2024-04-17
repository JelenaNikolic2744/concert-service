import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConcertsModule } from './concerts/concerts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/concert-service'),
    ConcertsModule,
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
