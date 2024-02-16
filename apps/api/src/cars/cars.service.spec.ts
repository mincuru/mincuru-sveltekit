import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';
import { PrismaService } from '@repo/prisma-nestjs-plugin';

describe('CarService', () => {
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, CarsService],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('get()はクルマの配列を返す', async () => {
    const cars = await service.get();
    expect(cars).toBeInstanceOf(Array);
  });
});
