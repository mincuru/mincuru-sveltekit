import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { PrismaService } from '@repo/prisma-nestjs-plugin';

@Module({
  imports: [],
  controllers: [CarsController],
  providers: [PrismaService, CarsService],
  exports: [CarsService],
})
export class CarsModule {}
