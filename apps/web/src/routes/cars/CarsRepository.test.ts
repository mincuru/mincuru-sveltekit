import { describe, expect, test, vi } from 'vitest';
import { CarsRepository } from './CarsRepository';
import { PowerTrain, type Car, BodyType, FuelType } from '@prisma/client';
import prisma from '$lib/__mock__/prisma';

vi.mock('@lib/prisma');

const cars: Car[] = [
  {
    id: 1,
    modelName: 'CX-5',
    modelCode: '6BA-EKEP',
    gradeName: '20S Smart Edition',
    makerName: 'マツダ',
    powerTrain: PowerTrain.ICE,
    driveSystem: 'AWD',
    url: 'https://www.mazda.co.jp/cars/cx-5/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
    price: 3200000,
    bodyType: BodyType.SUV,
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
    engineBore: 83.5,
    engineStroke: 91.2,
    engineCompressionRatio: 13.0,
    engineMaxOutputKw: 115,
    engineMaxOutputLowerRpm: 6000,
    engineMaxOutputHigherRpm: 4000,
    engineMaxTorqueNm: 213,
    engineMaxTorqueLowerRpm: 4000,
    engineMaxTorqueHigherRpm: 4000,
    fuelSystem: '筒内直接噴射(DI)',
    fuelType: FuelType.REGULAR,
    fuelTankCap: 56,
    fcrWltc: 14.6,
    fcrWltcL: 11.2,
    fcrWltcM: 15.3,
    fcrWltcH: 16.2,
    fcrWltcExh: null,
    fcrJc08: 15.6,
    minTurningRadius: 5.5,
    ecrWltc: null,
    ecrWltcL: null,
    ecrWltcM: null,
    ecrWltcH: null,
    ecrWltcExh: null,
    ecrJc08: null,
    mpcJc08: null,
    mpcWltc: null,
    fuelEfficiency: [
      'ミラーサイクルエンジン',
      'アイドリングストップ機構',
      '筒内直接噴射(DI)',
      '可変バルブタイミング',
      '気筒休止(PY-RPS型車)',
      '充電制御',
      'ロックアップ機構付トルクコンバーター',
      '電動パワーステアリング'
    ]
  },
  {
    id: 2,
    modelName: 'カローラツーリング',
    modelCode: '6AA-XWE211-AEXSB',
    gradeName: 'WxB',
    makerName: 'トヨタ',
    powerTrain: PowerTrain.StrHV,
    driveSystem: 'AWD',
    url: 'https://toyota.jp/corollatouring/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/8a/Toyota_COROLLA_TOURING_HYBRID_W%C3%97B_2WD_%286AA-ZWE211W-AWXSB%29_front.jpg',
    price: 2678500,
    bodyType: BodyType.STATION_WAGON,
    bodyLength: 4495,
    bodyWidth: 1745,
    bodyHeight: 1460,
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
    engineBore: 83.5,
    engineStroke: 91.2,
    engineCompressionRatio: 13.0,
    engineMaxOutputKw: 115,
    engineMaxOutputLowerRpm: 6000,
    engineMaxOutputHigherRpm: 4000,
    engineMaxTorqueNm: 213,
    engineMaxTorqueLowerRpm: 4000,
    engineMaxTorqueHigherRpm: 4000,
    fuelSystem: '筒内直接噴射(DI)',
    fuelType: FuelType.REGULAR,
    fuelTankCap: 56,
    fcrWltc: 14.6,
    fcrWltcL: 11.2,
    fcrWltcM: 15.3,
    fcrWltcH: 16.2,
    fcrWltcExh: null,
    fcrJc08: 15.6,
    minTurningRadius: 5.5,
    ecrWltc: null,
    ecrWltcL: null,
    ecrWltcM: null,
    ecrWltcH: null,
    ecrWltcExh: null,
    ecrJc08: null,
    mpcJc08: null,
    mpcWltc: null,
    fuelEfficiency: [
      'ミラーサイクルエンジン',
      'アイドリングストップ機構',
      '筒内直接噴射(DI)',
      '可変バルブタイミング',
      '気筒休止(PY-RPS型車)',
      '充電制御',
      'ロックアップ機構付トルクコンバーター',
      '電動パワーステアリング'
    ]
  },
  {
    id: 3,
    modelName: 'NSX',
    modelCode: '5AA-NC1',
    gradeName: 'Type S',
    makerName: 'ホンダ',
    powerTrain: PowerTrain.MldHV,
    driveSystem: 'AWD',
    url: 'https://www.honda.co.jp/NSX/types/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_NSX_3.5_CAA-NC1_%2820190722%29_01.jpg',
    price: 27940000,
    bodyType: BodyType.COUPE,
    bodyLength: 4535,
    bodyWidth: 1940,
    bodyHeight: 1215,
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
    engineBore: 83.5,
    engineStroke: 91.2,
    engineCompressionRatio: 13.0,
    engineMaxOutputKw: 115,
    engineMaxOutputLowerRpm: 6000,
    engineMaxOutputHigherRpm: 4000,
    engineMaxTorqueNm: 213,
    engineMaxTorqueLowerRpm: 4000,
    engineMaxTorqueHigherRpm: 4000,
    fuelSystem: '筒内直接噴射(DI)',
    fuelType: FuelType.PREMIUM,
    fuelTankCap: 56,
    fcrWltc: 14.6,
    fcrWltcL: 11.2,
    fcrWltcM: 15.3,
    fcrWltcH: 16.2,
    fcrJc08: 15.6,
    fcrWltcExh: null,
    minTurningRadius: 5.5,
    ecrWltc: null,
    ecrWltcL: null,
    ecrWltcM: null,
    ecrWltcH: null,
    ecrWltcExh: null,
    ecrJc08: null,
    mpcJc08: null,
    mpcWltc: null,
    fuelEfficiency: [
      'ミラーサイクルエンジン',
      'アイドリングストップ機構',
      '筒内直接噴射(DI)',
      '可変バルブタイミング',
      '気筒休止(PY-RPS型車)',
      '充電制御',
      'ロックアップ機構付トルクコンバーター',
      '電動パワーステアリング'
    ]
  },
  {
    id: 4,
    modelName: 'Honda e',
    modelCode: 'ZAA-ZC7',
    gradeName: 'Advance',
    makerName: 'ホンダ',
    powerTrain: PowerTrain.BEV,
    driveSystem: 'RR',
    url: 'https://www.honda.co.jp/honda-e/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/9e/Honda_e_Advance_%28ZAA-ZC7%29_front.jpg',
    price: 4950000,
    bodyType: BodyType.HATCHBACK,
    bodyLength: 3895,
    bodyWidth: 1750,
    bodyHeight: 1510,
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
    engineBore: 83.5,
    engineStroke: 91.2,
    engineCompressionRatio: 13.0,
    engineMaxOutputKw: 115,
    engineMaxOutputLowerRpm: 6000,
    engineMaxOutputHigherRpm: 4000,
    engineMaxTorqueNm: 213,
    engineMaxTorqueLowerRpm: 4000,
    engineMaxTorqueHigherRpm: 4000,
    fuelSystem: '筒内直接噴射(DI)',
    fuelType: FuelType.PREMIUM,
    fuelTankCap: 56,
    fcrWltc: 14.6,
    fcrWltcL: 11.2,
    fcrWltcM: 15.3,
    fcrWltcH: 16.2,
    fcrJc08: 15.6,
    fcrWltcExh: null,
    minTurningRadius: 5.5,
    ecrWltc: null,
    ecrWltcL: null,
    ecrWltcM: null,
    ecrWltcH: null,
    ecrWltcExh: null,
    ecrJc08: null,
    mpcJc08: null,
    mpcWltc: null,
    fuelEfficiency: [
      'ミラーサイクルエンジン',
      'アイドリングストップ機構',
      '筒内直接噴射(DI)',
      '可変バルブタイミング',
      '気筒休止(PY-RPS型車)',
      '充電制御',
      'ロックアップ機構付トルクコンバーター',
      '電動パワーステアリング'
    ]
  },
  {
    id: 5,
    modelName: 'ノート',
    modelCode: 'HR15DE',
    gradeName: '15RX',
    makerName: '日産',
    powerTrain: PowerTrain.SerHV,
    driveSystem: 'FF',
    url: 'https://www3.nissan.co.jp/vehicles/new/note.html',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg',
    price: 2445300,
    bodyType: BodyType.HATCHBACK,
    bodyLength: 4045,
    bodyWidth: 1695,
    bodyHeight: 1520,
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
    engineBore: 83.5,
    engineStroke: 91.2,
    engineCompressionRatio: 13.0,
    engineMaxOutputKw: 115,
    engineMaxOutputLowerRpm: 6000,
    engineMaxOutputHigherRpm: 4000,
    engineMaxTorqueNm: 213,
    engineMaxTorqueLowerRpm: 4000,
    engineMaxTorqueHigherRpm: 4000,
    fuelSystem: '筒内直接噴射(DI)',
    fuelType: FuelType.REGULAR,
    fuelTankCap: 56,
    fcrWltc: 14.6,
    fcrWltcL: 11.2,
    fcrWltcM: 15.3,
    fcrWltcH: 16.2,
    fcrJc08: 15.6,
    fcrWltcExh: null,
    minTurningRadius: 5.5,
    ecrWltc: null,
    ecrWltcL: null,
    ecrWltcM: null,
    ecrWltcH: null,
    ecrWltcExh: null,
    ecrJc08: null,
    mpcJc08: null,
    mpcWltc: null,
    fuelEfficiency: [
      'ミラーサイクルエンジン',
      'アイドリングストップ機構',
      '筒内直接噴射(DI)',
      '可変バルブタイミング',
      '気筒休止(PY-RPS型車)',
      '充電制御',
      'ロックアップ機構付トルクコンバーター',
      '電動パワーステアリング'
    ]
  },
  {
    id: 6,
    modelName: '3シリーズツーリング',
    modelCode: '3BA-6K20',
    gradeName: '318iツーリング',
    makerName: 'BMW',
    powerTrain: PowerTrain.ICE,
    driveSystem: 'AWD',
    url: 'https://www.bmw.co.jp/ja/all-models/3-series/touring/2019/bmw-3-series-touring-inspire.html',
    imageUrl: '',
    price: 6340000,
    bodyType: BodyType.STATION_WAGON,
    bodyLength: 4715,
    bodyWidth: 1825,
    bodyHeight: 1475,
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
    engineBore: 83.5,
    engineStroke: 91.2,
    engineCompressionRatio: 13.0,
    engineMaxOutputKw: 115,
    engineMaxOutputLowerRpm: 6000,
    engineMaxOutputHigherRpm: 4000,
    engineMaxTorqueNm: 213,
    engineMaxTorqueLowerRpm: 4000,
    engineMaxTorqueHigherRpm: 4000,
    fuelSystem: '筒内直接噴射(DI)',
    fuelType: FuelType.DIESEL,
    fuelTankCap: 56,
    fcrWltc: 14.6,
    fcrWltcL: 11.2,
    fcrWltcM: 15.3,
    fcrWltcH: 16.2,
    fcrJc08: 15.6,
    fcrWltcExh: null,
    minTurningRadius: 5.5,
    ecrWltc: null,
    ecrWltcL: null,
    ecrWltcM: null,
    ecrWltcH: null,
    ecrWltcExh: null,
    ecrJc08: null,
    mpcJc08: null,
    mpcWltc: null,
    fuelEfficiency: [
      'ミラーサイクルエンジン',
      'アイドリングストップ機構',
      '筒内直接噴射(DI)',
      '可変バルブタイミング',
      '気筒休止(PY-RPS型車)',
      '充電制御',
      'ロックアップ機構付トルクコンバーター',
      '電動パワーステアリング'
    ]
  }
];

const car: Car = cars[0];

const makerNames = [
  { ...car, makerName: 'マツダ' },
  { ...car, makerName: '日産' },
  { ...car, makerName: 'ホンダ' },
  { ...car, makerName: 'トヨタ' },
  { ...car, makerName: 'BMW' }
];
const bodyTypes = [
  { ...car, bodyType: BodyType.SUV },
  { ...car, bodyType: BodyType.STATION_WAGON },
  { ...car, bodyType: BodyType.COUPE },
  { ...car, bodyType: BodyType.HATCHBACK }
];
const powerTrains = [
  { ...car, powerTrain: PowerTrain.ICE },
  { ...car, powerTrain: PowerTrain.StrHV },
  { ...car, powerTrain: PowerTrain.MldHV },
  { ...car, powerTrain: PowerTrain.BEV },
  { ...car, powerTrain: PowerTrain.SerHV }
];
const driveSystems = [
  { ...car, driveSystem: 'AWD' },
  { ...car, driveSystem: 'RR' },
  { ...car, driveSystem: 'FF' }
];

describe('generateFilter', () => {
  test('with makerNames', async () => {
    prisma.car.findMany.mockResolvedValueOnce(makerNames);
    prisma.car.findMany.mockResolvedValueOnce(bodyTypes);
    prisma.car.findMany.mockResolvedValueOnce(powerTrains);
    prisma.car.findMany.mockResolvedValueOnce(driveSystems);
    const repository = new CarsRepository(prisma);
    const url = new URL('http://example.com/cars?makerNames=マツダ,日産');
    // サーバーコンポーネントのload関数を呼び出す
    const actual = await repository.generateFilter(url);
    expect(actual.makers).toStrictEqual([
      {
        title: 'マツダ',
        value: 'マツダ',
        checked: true
      },
      {
        title: '日産',
        value: '日産',
        checked: true
      },
      {
        title: 'ホンダ',
        value: 'ホンダ',
        checked: false
      },
      {
        title: 'トヨタ',
        value: 'トヨタ',
        checked: false
      },
      {
        title: 'BMW',
        value: 'BMW',
        checked: false
      }
    ]);
    actual.bodyTypes.forEach((b) => {
      expect(b.checked).toBe(false);
    });
    actual.powerTrains.forEach((p) => {
      expect(p.checked).toBe(false);
    });
    actual.driveSystems.forEach((d) => {
      expect(d.checked).toBe(false);
    });
  });

  test('with bodyTypes', async () => {
    prisma.car.findMany.mockResolvedValueOnce(makerNames);
    prisma.car.findMany.mockResolvedValueOnce(bodyTypes);
    prisma.car.findMany.mockResolvedValueOnce(powerTrains);
    prisma.car.findMany.mockResolvedValueOnce(driveSystems);
    const repository = new CarsRepository(prisma);
    const url = new URL('http://example.com/cars?bodyTypes=SUV,COUPE');
    // サーバーコンポーネントのload関数を呼び出す
    const actual = await repository.generateFilter(url);
    actual.makers.forEach((m) => {
      expect(m.checked).toBe(false);
    });
    expect(actual.bodyTypes).toStrictEqual([
      {
        title: 'SUV',
        value: 'SUV',
        checked: true
      },
      {
        title: 'STATION_WAGON',
        value: 'STATION_WAGON',
        checked: false
      },
      {
        title: 'COUPE',
        value: 'COUPE',
        checked: true
      },
      {
        title: 'HATCHBACK',
        value: 'HATCHBACK',
        checked: false
      }
    ]);
    actual.powerTrains.forEach((p) => {
      expect(p.checked).toBe(false);
    });
    actual.driveSystems.forEach((d) => {
      expect(d.checked).toBe(false);
    });
  });

  test('with powerTrains', async () => {
    prisma.car.findMany.mockResolvedValueOnce(makerNames);
    prisma.car.findMany.mockResolvedValueOnce(bodyTypes);
    prisma.car.findMany.mockResolvedValueOnce(powerTrains);
    prisma.car.findMany.mockResolvedValueOnce(driveSystems);
    const repository = new CarsRepository(prisma);
    const url = new URL('http://example.com/cars?powerTrains=MldHV,ICE');
    // サーバーコンポーネントのload関数を呼び出す
    const actual = await repository.generateFilter(url);
    actual.makers.forEach((m) => {
      expect(m.checked).toBe(false);
    });
    actual.bodyTypes.forEach((b) => {
      expect(b.checked).toBe(false);
    });
    expect(actual.powerTrains).toStrictEqual([
      {
        title: 'ICE',
        value: 'ICE',
        checked: true
      },
      {
        title: 'StrHV',
        value: 'StrHV',
        checked: false
      },
      {
        title: 'MldHV',
        value: 'MldHV',
        checked: true
      },
      {
        title: 'BEV',
        value: 'BEV',
        checked: false
      },
      {
        title: 'SerHV',
        value: 'SerHV',
        checked: false
      }
    ]);
    actual.driveSystems.forEach((d) => {
      expect(d.checked).toBe(false);
    });
  });

  test('with driveSystems', async () => {
    prisma.car.findMany.mockResolvedValueOnce(makerNames);
    prisma.car.findMany.mockResolvedValueOnce(bodyTypes);
    prisma.car.findMany.mockResolvedValueOnce(powerTrains);
    prisma.car.findMany.mockResolvedValueOnce(driveSystems);
    const repository = new CarsRepository(prisma);
    const url = new URL('http://example.com/cars?driveSystems=RR,FF');
    // サーバーコンポーネントのload関数を呼び出す
    const actual = await repository.generateFilter(url);
    actual.makers.forEach((m) => {
      expect(m.checked).toBe(false);
    });
    actual.bodyTypes.forEach((b) => {
      expect(b.checked).toBe(false);
    });
    actual.powerTrains.forEach((p) => {
      expect(p.checked).toBe(false);
    });
    expect(actual.driveSystems).toStrictEqual([
      {
        title: 'AWD',
        value: 'AWD',
        checked: false
      },
      {
        title: 'RR',
        value: 'RR',
        checked: true
      },
      {
        title: 'FF',
        value: 'FF',
        checked: true
      }
    ]);
  });

  test('without query string', async () => {
    prisma.car.findMany.mockResolvedValueOnce(makerNames);
    prisma.car.findMany.mockResolvedValueOnce(bodyTypes);
    prisma.car.findMany.mockResolvedValueOnce(powerTrains);
    prisma.car.findMany.mockResolvedValueOnce(driveSystems);
    const repository = new CarsRepository(prisma);
    const url = new URL('http://example.com/cars');
    // サーバーコンポーネントのload関数を呼び出す
    const actual = await repository.generateFilter(url);
    actual.makers.forEach((m) => {
      expect(m.checked).toBe(false);
    });
    actual.bodyTypes.forEach((b) => {
      expect(b.checked).toBe(false);
    });
    actual.powerTrains.forEach((p) => {
      expect(p.checked).toBe(false);
    });
    actual.driveSystems.forEach((d) => {
      expect(d.checked).toBe(false);
    });
  });

  test('with multiple query string', async () => {
    prisma.car.findMany.mockResolvedValueOnce(makerNames);
    prisma.car.findMany.mockResolvedValueOnce(bodyTypes);
    prisma.car.findMany.mockResolvedValueOnce(powerTrains);
    prisma.car.findMany.mockResolvedValueOnce(driveSystems);
    const repository = new CarsRepository(prisma);
    const url = new URL(
      'http://example.com/cars?makerNames=マツダ,日産&bodyTypes=SUV,COUPE&powerTrains=MldHV,ICE&driveSystems=RR,FF'
    );
    // サーバーコンポーネントのload関数を呼び出す
    const actual = await repository.generateFilter(url);
    expect(actual.makers).toStrictEqual([
      {
        title: 'マツダ',
        value: 'マツダ',
        checked: true
      },
      {
        title: '日産',
        value: '日産',
        checked: true
      },
      {
        title: 'ホンダ',
        value: 'ホンダ',
        checked: false
      },
      {
        title: 'トヨタ',
        value: 'トヨタ',
        checked: false
      },
      {
        title: 'BMW',
        value: 'BMW',
        checked: false
      }
    ]);
    expect(actual.bodyTypes).toStrictEqual([
      {
        title: 'SUV',
        value: 'SUV',
        checked: true
      },
      {
        title: 'STATION_WAGON',
        value: 'STATION_WAGON',
        checked: false
      },
      {
        title: 'COUPE',
        value: 'COUPE',
        checked: true
      },
      {
        title: 'HATCHBACK',
        value: 'HATCHBACK',
        checked: false
      }
    ]);
    expect(actual.powerTrains).toStrictEqual([
      {
        title: 'ICE',
        value: 'ICE',
        checked: true
      },
      {
        title: 'StrHV',
        value: 'StrHV',
        checked: false
      },
      {
        title: 'MldHV',
        value: 'MldHV',
        checked: true
      },
      {
        title: 'BEV',
        value: 'BEV',
        checked: false
      },
      {
        title: 'SerHV',
        value: 'SerHV',
        checked: false
      }
    ]);
    expect(actual.driveSystems).toStrictEqual([
      {
        title: 'AWD',
        value: 'AWD',
        checked: false
      },
      {
        title: 'RR',
        value: 'RR',
        checked: true
      },
      {
        title: 'FF',
        value: 'FF',
        checked: true
      }
    ]);
  });

  test('with invalid query string', async () => {
    prisma.car.findMany.mockResolvedValueOnce(makerNames);
    prisma.car.findMany.mockResolvedValueOnce(bodyTypes);
    prisma.car.findMany.mockResolvedValueOnce(powerTrains);
    prisma.car.findMany.mockResolvedValueOnce(driveSystems);
    const repository = new CarsRepository(prisma);
    const url = new URL('http://example.com/cars?invalid=hogehoge');
    // サーバーコンポーネントのload関数を呼び出す
    const actual = await repository.generateFilter(url);
    actual.makers.forEach((m) => {
      expect(m.checked).toBe(false);
    });
    actual.bodyTypes.forEach((b) => {
      expect(b.checked).toBe(false);
    });
    actual.powerTrains.forEach((p) => {
      expect(p.checked).toBe(false);
    });
    actual.driveSystems.forEach((d) => {
      expect(d.checked).toBe(false);
    });
  });
});

describe('queryCars', () => {
  test('with makerNames', async () => {
    prisma.car.findMany.mockResolvedValue(cars);
    const repository = new CarsRepository(prisma);
    const url = new URL('http://example.com/cars');
    const filter = await repository.generateFilter(url);
    const actual = await repository.queryCars(filter);
    expect(actual.length).toBe(6);
  });
});
