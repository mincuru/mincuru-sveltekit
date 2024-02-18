import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Car } from '@prisma/client';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async getCars(): Promise<Car[]> {
    return await this.carsService.getCars();
  }

  @Post()
  async postCar(car: Car): Promise<Car> {
    return await this.carsService.post(car);
  }

  @Patch()
  async patchCar(car: Car): Promise<Car> {
    return await this.carsService.patch(car);
  }

  @Delete()
  async deleteCar(id: number): Promise<number> {
    return await this.carsService.delete(id);
  }
}
