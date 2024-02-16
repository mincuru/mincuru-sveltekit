import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PrismaService } from '@repo/prisma-nestjs-plugin';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [AppController],
  providers: [AppService /*, PrismaService*/],
})
export class AppModule {}
