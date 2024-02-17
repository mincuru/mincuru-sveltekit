import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';
import { PrismaService } from '../prisma.service';
import { Car } from '@prisma/client';

const carOne: Car = {
  id: 1,
  modelName: 'CX-5',
  modelCode: '6BA-EKEP',
  gradeName: '20S Smart Edition',
  makerName: 'マツダ',
  powerTrain: 'ICE',
  driveSystem: 'AWD',
  url: 'https://www.mazda.co.jp/cars/cx-5/',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
  price: 3200000,
  bodyType: 'SUV',
  bodyLength: 4747,
  bodyWidth: 1850,
  bodyHeight: 1690,
  wheelBase: 2700,
  treadFront: 1590,
  treadRear: 1590,
  roadClearance: 200,
  weight: 1550,
  interiorLength: 1890,
  interiorWidth: 1540,
  interiorHeight: 1265,
  ridingCap: 5,
  steering: 'ラック&ピニオン式',
  suspensionFront: 'ストラット式',
  suspensionRear: 'マルチリンク式',
  breakFront: 'ベンチレーテッドディスク',
  breakRear: 'ディスク',
  engineCode: 'PE-VPS',
  engineType: '水冷直列4気筒DOHC16バルブ',
  engineCylinderNum: 4,
  engineCylinderLayout: '直列',
  engineValveSystem: 'DOHC',
  engineDisplacement: 1997,
  engineBore: 83,
  engineStroke: 91,
  engineCompressionRatio: 13,
  engineMaxOutputKw: 115,
  engineMaxOutputLowerRpm: 6000,
  engineMaxOutputHigherRpm: 4000,
  engineMaxTorqueNm: 213,
  engineMaxTorqueLowerRpm: 4000,
  engineMaxTorqueHigherRpm: 4000,
  fuelSystem: '筒内直接噴射(DI)',
  fuelType: 'REGULAR',
  fuelTankCap: 56,
  minTurningRadius: 5,
  fcrWltc: 14.6,
  fcrWltcL: 11.2,
  fcrWltcM: 15.3,
  fcrWltcH: 16.2,
  fcrWltcExh: null,
  fcrJc08: 15.6,
  mpcWltc: null,
  ecrWltc: null,
  ecrWltcL: null,
  ecrWltcM: null,
  ecrWltcH: null,
  ecrWltcExh: null,
  ecrJc08: null,
  mpcJc08: null,
  fuelEfficiency: [
    'ミラーサイクルエンジン',
    'アイドリングストップ機構',
    '筒内直接噴射(DI)',
    '可変バルブタイミング',
    '気筒休止(PY-RPS型車)',
    '充電制御',
    'ロックアップ機構付トルクコンバーター',
    '電動パワーステアリング',
  ],
};
const carArray: Car[] = [carOne];

const db = {
  car: {
    findMany: jest.fn().mockResolvedValue(carArray),
    // findUnique: jest.fn().mockResolvedValue(oneCat),
    // findFirst: jest.fn().mockResolvedValue(oneCat),
    create: jest.fn().mockReturnValue(carOne),
    // save: jest.fn(),
    update: jest.fn().mockResolvedValue(carOne),
    delete: jest.fn().mockResolvedValue(carOne),
  },
};

describe('CarService', () => {
  let service: CarsService;
  // let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CarsService,
        {
          provide: PrismaService,
          useValue: db,
        },
      ],
    }).compile();

    service = module.get<CarsService>(CarsService);
    // prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getCars()はクルマの配列を返す', async () => {
    const cars = await service.getCars();
    expect(cars).toBeInstanceOf(Array);
    expect(cars.length).toBe(1);
  });

  it('post()は新しいクルマを返す', async () => {
    const newCar = await service.post(carOne);
    expect(newCar).toHaveProperty('id');
    expect(newCar.id).toBe(1);
  });

  it('patch()は更新されたクルマを返す', async () => {
    const updatedCar = await service.patch(carOne);
    expect(updatedCar).toHaveProperty('id');
    expect(updatedCar.id).toBe(1);
  });

  it('delete()は削除されたクルマのIDを返す', async () => {
    const deletedCarId = await service.delete(1);
    expect(deletedCarId).toBe(1);
  });
});
