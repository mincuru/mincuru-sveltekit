import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
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

describe('CarsController', () => {
  // let controller: CarsController;
  // let service: CarsService;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   controllers: [CarsController],
    //   providers: [
    //     PrismaService,
    //     {
    //       provide: CarsService,
    //       useValue: {
    //         getCars: jest.fn().mockResolvedValue(carArray),
    //         post: jest.fn().mockResolvedValue(carOne),
    //       },
    //     },
    //   ],
    // }).compile();
    // controller = module.get<CarsController>(CarsController);
    // // service = module.get<CarsService>(CarsService);
  });

  async function createController(value: any): Promise<CarsController> {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [
        PrismaService,
        {
          provide: CarsService,
          useValue: value,
        },
      ],
    }).compile();
    return module.get<CarsController>(CarsController);
  }

  it('should be defined', async () => {
    // Arrange
    const value = {};
    const controller = await createController(value);
    expect(controller).toBeDefined();
  });

  it('getCars()はすべてのクルマの配列を返す', async () => {
    // Arrange
    const value = {
      getCars: jest.fn().mockResolvedValue(carArray),
    };
    const controller = await createController(value);
    // Act
    const cars = await controller.getCars();
    // Assert
    expect(cars).toHaveLength(1);
  });

  it('getCars()は長さ0の配列を返す', async () => {
    // Arrange
    const value = {
      getCars: jest.fn().mockResolvedValue([]),
    };
    const controller = await createController(value);
    // Act
    const cars = await controller.getCars();
    // Assert
    expect(cars).toHaveLength(0);
  });

  it('postCar()は新しいクルマを返す', async () => {
    // Arrange
    const value = {
      post: jest.fn().mockResolvedValue(carOne),
    };
    const controller = await createController(value);
    // Act
    const newCar = await controller.postCar(carOne);
    // Assert
    expect(newCar).toHaveProperty('id');
    expect(newCar.id).toBe(1);
  });

  it('patchCar()は更新されたクルマを返す', async () => {
    // Arrange
    const value = {
      patch: jest.fn().mockResolvedValue(carOne),
    };
    const controller = await createController(value);
    // Act
    const updatedCar = await controller.patchCar(carOne);
    // Assert
    expect(updatedCar).toHaveProperty('id');
    expect(updatedCar.id).toBe(1);
  });

  it('deleteCar()は更新されたクルマを返す', async () => {
    // Arrange
    const value = {
      delete: jest.fn().mockResolvedValue(1),
    };
    const controller = await createController(value);
    // Act
    const deletedCarId = await controller.deleteCar(1);
    // Assert
    expect(deletedCarId).toBe(1);
  });
});
