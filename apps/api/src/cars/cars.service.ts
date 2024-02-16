import { Injectable } from '@nestjs/common';
import { PrismaService } from '@repo/prisma-nestjs-plugin';
import { Car } from '@prisma/client';

@Injectable()
export class CarsService {
  constructor(private readonly prisma: PrismaService) {}

  async get(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany();
    return cars;
  }

  async post(car: Car): Promise<Car> {
    const newCar = await this.prisma.car.create({
      data: car,
    });
    return newCar;
  }

  async patch(car: Car): Promise<Car> {
    const updatedCar = await this.prisma.car.update({
      where: { id: car.id },
      data: car,
    });
    return updatedCar;
  }

  async delete(id: number): Promise<Car> {
    const deletedCar = await this.prisma.car.delete({
      where: { id },
    });
    return deletedCar;
  }
}
