import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Car } from '@prisma/client';

@Injectable()
export class CarsService {
  constructor(private readonly prisma: PrismaService) {}

  async getCars(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany();
    return cars;
  }

  async post(car: Prisma.CarCreateInput): Promise<Car> {
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

  async delete(id: number): Promise<number> {
    const deletedCar = await this.prisma.car.delete({
      where: { id },
    });
    return deletedCar.id;
  }
}
