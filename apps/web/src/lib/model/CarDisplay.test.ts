import { CarDisplay } from '$lib/model/CarDisplay';

describe('CarDisplay', async () => {
  const carNormal = new CarDisplay({
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
    fuelType: 'REGULAR',
    fuelTankCap: 56,
    minTurningRadius: 5.5,
    fcrWltc: 14.6,
    fcrWltcL: 11.2,
    fcrWltcM: 15.3,
    fcrWltcH: 16.2,
    fcrWltcExh: 13.6,
    fcrJc08: 15.6,
    mpcWltc: 14.6,
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
      '電動パワーステアリング'
    ]
  });

  const carNull = new CarDisplay({
    id: 1,
    modelName: 'CX-5',
    modelCode: '6BA-EKEP',
    gradeName: '20S Smart Edition',
    makerName: 'マツダ',
    powerTrain: 'ICE',
    driveSystem: 'AWD',
    url: null,
    imageUrl: null,
    price: null,
    bodyType: 'SUV',
    bodyLength: null,
    bodyWidth: null,
    bodyHeight: null,
    wheelBase: null,
    treadFront: null,
    treadRear: null,
    roadClearance: null,
    weight: null,
    interiorLength: null,
    interiorWidth: null,
    interiorHeight: null,
    ridingCap: null,
    steering: null,
    suspensionFront: null,
    suspensionRear: null,
    breakFront: null,
    breakRear: null,
    engineCode: null,
    engineType: null,
    engineCylinderNum: null,
    engineCylinderLayout: null,
    engineValveSystem: null,
    engineDisplacement: null,
    engineBore: null,
    engineStroke: null,
    engineCompressionRatio: null,
    engineMaxOutputKw: null,
    engineMaxOutputLowerRpm: null,
    engineMaxOutputHigherRpm: null,
    engineMaxTorqueNm: null,
    engineMaxTorqueLowerRpm: null,
    engineMaxTorqueHigherRpm: null,
    fuelSystem: null,
    fuelType: null,
    fuelTankCap: null,
    minTurningRadius: null,
    fcrWltc: null,
    fcrWltcL: null,
    fcrWltcM: null,
    fcrWltcH: null,
    fcrWltcExh: null,
    fcrJc08: null,
    mpcWltc: null,
    ecrWltc: null,
    ecrWltcL: null,
    ecrWltcM: null,
    ecrWltcH: null,
    ecrWltcExh: null,
    ecrJc08: null,
    mpcJc08: null,
    fuelEfficiency: []
  });

  describe('powerTrainLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.powerTrainLabel).toEqual('エンジン');
    });
  });

  describe('priceLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.priceLabel).toEqual('3,200,000');
    });

    test('Null', async () => {
      expect(carNull.priceLabel).toEqual('N/A');
    });
  });

  describe('bodyTypeLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.bodyTypeLabel).toEqual('SUV');
    });
  });

  describe('bodyLengthLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.bodyLengthLabel).toEqual('4747');
    });

    test('Null', async () => {
      expect(carNull.bodyLengthLabel).toEqual('N/A');
    });
  });

  describe('bodyWidthLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.bodyWidthLabel).toEqual('1850');
    });

    test('Null', async () => {
      expect(carNull.bodyWidthLabel).toEqual('N/A');
    });
  });

  describe('bodyHeightLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.bodyHeightLabel).toEqual('1690');
    });

    test('Null', async () => {
      expect(carNull.bodyHeightLabel).toEqual('N/A');
    });
  });
});
