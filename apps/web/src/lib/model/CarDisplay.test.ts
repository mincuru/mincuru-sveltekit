import { CarDisplay } from '$lib/model/CarDisplay';

describe('CarDisplay', async () => {
  let carNormal: CarDisplay;
  let carNull: CarDisplay;

  beforeEach(async () => {
    carNormal = new CarDisplay({
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
      engineDisplacement: 1.997,
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
      ecrWltc: 0.0,
      ecrWltcL: 0.0,
      ecrWltcM: 0.0,
      ecrWltcH: 0.0,
      ecrWltcExh: 0.0,
      ecrJc08: 0.0,
      mpcJc08: 0.0,
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

    carNull = new CarDisplay({
      id: 7,
      modelName: 'スタンダードカート',
      modelCode: 'STANDARD-CART',
      gradeName: 'SWITCH',
      makerName: 'NTD',
      powerTrain: 'ICE',
      driveSystem: 'AWD',
      url: null,
      imageUrl: null,
      price: null,
      bodyType: 'COUPE',
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
  });

  describe('powerTrainLabel', async () => {
    test('Normal ICE', async () => {
      expect(carNormal.powerTrainLabel).toEqual('エンジン');
    });
    test('Normal StrHV', async () => {
      carNormal.powerTrain = 'StrHV';
      expect(carNormal.powerTrainLabel).toEqual('ストロングHV');
    });
    test('Normal MldHV', async () => {
      carNormal.powerTrain = 'MldHV';
      expect(carNormal.powerTrainLabel).toEqual('マイルドHV');
    });
    test('Normal SerHV', async () => {
      carNormal.powerTrain = 'SerHV';
      expect(carNormal.powerTrainLabel).toEqual('シリーズHV');
    });
    test('Normal PHEV', async () => {
      carNormal.powerTrain = 'PHEV';
      expect(carNormal.powerTrainLabel).toEqual('プラグインHV');
    });
    test('Normal BEV', async () => {
      carNormal.powerTrain = 'BEV';
      expect(carNormal.powerTrainLabel).toEqual('バッテリーEV');
    });
    test('Normal RexEV', async () => {
      carNormal.powerTrain = 'RexEV';
      expect(carNormal.powerTrainLabel).toEqual('レンジエクステンダーEV');
    });
    test('Normal FCEV', async () => {
      carNormal.powerTrain = 'FCEV';
      expect(carNormal.powerTrainLabel).toEqual('燃料電池車');
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
    test('Normal SEDAN', async () => {
      carNormal.bodyType = 'SEDAN';
      expect(carNormal.bodyTypeLabel).toEqual('セダン');
    });
    test('Normal HATCHBACK', async () => {
      carNormal.bodyType = 'HATCHBACK';
      expect(carNormal.bodyTypeLabel).toEqual('ハッチバック');
    });
    test('Normal CROSS_COUNTRY', async () => {
      carNormal.bodyType = 'CROSS_COUNTRY';
      expect(carNormal.bodyTypeLabel).toEqual('クロスカントリー');
    });
    test('Normal K', async () => {
      carNormal.bodyType = 'K';
      expect(carNormal.bodyTypeLabel).toEqual('K');
    });
    test('Normal COUPE', async () => {
      carNormal.bodyType = 'COUPE';
      expect(carNormal.bodyTypeLabel).toEqual('クーペ');
    });
    test('Normal STATION_WAGON', async () => {
      carNormal.bodyType = 'STATION_WAGON';
      expect(carNormal.bodyTypeLabel).toEqual('ステーションワゴン');
    });
    test('Normal SUV', async () => {
      carNormal.bodyType = 'SUV';
      expect(carNormal.bodyTypeLabel).toEqual('SUV');
    });
    test('Normal ONEBOX', async () => {
      carNormal.bodyType = 'ONEBOX';
      expect(carNormal.bodyTypeLabel).toEqual('ワンボックス');
    });
    test('Normal K_OPEN', async () => {
      carNormal.bodyType = 'K_OPEN';
      expect(carNormal.bodyTypeLabel).toEqual('Kオープン');
    });
    test('Normal K_ONEBOX', async () => {
      carNormal.bodyType = 'K_ONEBOX';
      expect(carNormal.bodyTypeLabel).toEqual('Kワンボックス');
    });

    test('Normal OPEN', async () => {
      carNormal.bodyType = 'OPEN';
      expect(carNormal.bodyTypeLabel).toEqual('オープン');
    });

    test('Normal PICKUP_TRUCK', async () => {
      carNormal.bodyType = 'PICKUP_TRUCK';
      expect(carNormal.bodyTypeLabel).toEqual('ピックアップトラック');
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

  describe('wheelBaseLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.wheelBaseLabel).toEqual('2700');
    });

    test('Null', async () => {
      expect(carNull.wheelBaseLabel).toEqual('N/A');
    });
  });

  describe('treadFrontLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.treadFrontLabel).toEqual('1590');
    });

    test('Null', async () => {
      expect(carNull.treadFrontLabel).toEqual('N/A');
    });
  });

  describe('treadRearLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.treadRearLabel).toEqual('1590');
    });

    test('Null', async () => {
      expect(carNull.treadRearLabel).toEqual('N/A');
    });
  });

  describe('roadClearanceLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.roadClearanceLabel).toEqual('200');
    });

    test('Null', async () => {
      expect(carNull.roadClearanceLabel).toEqual('N/A');
    });
  });

  describe('weightLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.weightLabel).toEqual('1550');
    });

    test('Null', async () => {
      expect(carNull.weightLabel).toEqual('N/A');
    });
  });

  describe('interiorLengthLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.interiorLengthLabel).toEqual('1890');
    });

    test('Null', async () => {
      expect(carNull.interiorLengthLabel).toEqual('N/A');
    });
  });

  describe('interiorWidthLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.interiorWidthLabel).toEqual('1540');
    });

    test('Null', async () => {
      expect(carNull.interiorWidthLabel).toEqual('N/A');
    });
  });

  describe('interiorHeightLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.interiorHeightLabel).toEqual('1265');
    });

    test('Null', async () => {
      expect(carNull.interiorHeightLabel).toEqual('N/A');
    });
  });

  describe('ridingCapLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.ridingCapLabel).toEqual('5');
    });

    test('Null', async () => {
      expect(carNull.ridingCapLabel).toEqual('N/A');
    });
  });

  describe('steeringLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.steeringLabel).toEqual('ラック&ピニオン式');
    });

    test('Null', async () => {
      expect(carNull.steeringLabel).toEqual('N/A');
    });
  });

  describe('suspensionFrontLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.suspensionFrontLabel).toEqual('ストラット式');
    });

    test('Null', async () => {
      expect(carNull.suspensionFrontLabel).toEqual('N/A');
    });
  });

  describe('suspensionRearLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.suspensionRearLabel).toEqual('マルチリンク式');
    });

    test('Null', async () => {
      expect(carNull.suspensionRearLabel).toEqual('N/A');
    });
  });

  describe('breakFrontLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.breakFrontLabel).toEqual('ベンチレーテッドディスク');
    });

    test('Null', async () => {
      expect(carNull.breakFrontLabel).toEqual('N/A');
    });
  });

  describe('breakRearLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.breakRearLabel).toEqual('ディスク');
    });

    test('Null', async () => {
      expect(carNull.breakRearLabel).toEqual('N/A');
    });
  });

  describe('engineCodeLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineCodeLabel).toEqual('PE-VPS');
    });

    test('Null', async () => {
      expect(carNull.engineCodeLabel).toEqual('N/A');
    });
  });

  describe('engineTypeLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineTypeLabel).toEqual('水冷直列4気筒DOHC16バルブ');
    });

    test('Null', async () => {
      expect(carNull.engineTypeLabel).toEqual('N/A');
    });
  });

  describe('engineCylinderNumLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineCylinderNumLabel).toEqual('4');
    });

    test('Null', async () => {
      expect(carNull.engineCylinderNumLabel).toEqual('N/A');
    });
  });

  describe('engineCylinderLayoutLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineCylinderLayoutLabel).toEqual('直列');
    });

    test('Null', async () => {
      expect(carNull.engineCylinderLayoutLabel).toEqual('N/A');
    });
  });

  describe('engineValveSystemLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineValveSystemLabel).toEqual('DOHC');
    });

    test('Null', async () => {
      expect(carNull.engineValveSystemLabel).toEqual('N/A');
    });
  });

  describe('engineDisplacementLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineDisplacementLabel).toEqual('1.997');
    });

    test('Null', async () => {
      expect(carNull.engineDisplacementLabel).toEqual('N/A');
    });
  });

  describe('engineBoreLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineBoreLabel).toEqual('83.5');
    });

    test('Null', async () => {
      expect(carNull.engineBoreLabel).toEqual('N/A');
    });
  });

  describe('engineStrokeLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineStrokeLabel).toEqual('91.2');
    });

    test('Null', async () => {
      expect(carNull.engineStrokeLabel).toEqual('N/A');
    });
  });

  describe('engineCompressionRatioLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineCompressionRatioLabel).toEqual('13.0');
    });

    test('Null', async () => {
      expect(carNull.engineCompressionRatioLabel).toEqual('N/A');
    });
  });

  describe('engineMaxOutputKwLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineMaxOutputKwLabel).toEqual('115');
    });

    test('Null', async () => {
      expect(carNull.engineMaxOutputKwLabel).toEqual('N/A');
    });
  });

  describe('engineMaxOutputLowerRpmLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineMaxOutputLowerRpmLabel).toEqual('6000');
    });

    test('Null', async () => {
      expect(carNull.engineMaxOutputLowerRpmLabel).toEqual('N/A');
    });
  });

  describe('engineMaxOutputHigherRpmLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineMaxOutputHigherRpmLabel).toEqual('4000');
    });

    test('Null', async () => {
      expect(carNull.engineMaxOutputHigherRpmLabel).toEqual('N/A');
    });
  });

  describe('engineMaxTorqueNmLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineMaxTorqueNmLabel).toEqual('213');
    });

    test('Null', async () => {
      expect(carNull.engineMaxTorqueNmLabel).toEqual('N/A');
    });
  });

  describe('engineMaxTorqueLowerRpmLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineMaxTorqueLowerRpmLabel).toEqual('4000');
    });

    test('Null', async () => {
      expect(carNull.engineMaxTorqueLowerRpmLabel).toEqual('N/A');
    });
  });

  describe('engineMaxTorqueHigherRpmLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.engineMaxTorqueHigherRpmLabel).toEqual('4000');
    });

    test('Null', async () => {
      expect(carNull.engineMaxTorqueHigherRpmLabel).toEqual('N/A');
    });
  });

  describe('fuelSystemLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.fuelSystemLabel).toEqual('筒内直接噴射(DI)');
    });

    test('Null', async () => {
      expect(carNull.fuelSystemLabel).toEqual('N/A');
    });
  });

  describe('fuelTypeLabel', async () => {
    test('Normal DIESEL', async () => {
      carNormal.fuelType = 'DIESEL';
      expect(carNormal.fuelTypeLabel).toEqual('軽油');
    });
    test('Normal REGULAR', async () => {
      expect(carNormal.fuelTypeLabel).toEqual('無鉛レギュラーガソリン');
    });
    test('Normal PREMIUM', async () => {
      carNormal.fuelType = 'PREMIUM';
      expect(carNormal.fuelTypeLabel).toEqual('無鉛プレミアムガソリン');
    });
    test('Normal LPG', async () => {
      carNormal.fuelType = 'LPG';
      expect(carNormal.fuelTypeLabel).toEqual('LPG');
    });
    test('Normal BIO', async () => {
      carNormal.fuelType = 'BIO';
      expect(carNormal.fuelTypeLabel).toEqual('バイオ燃料');
    });
    test('Normal HYDROGEN', async () => {
      carNormal.fuelType = 'HYDROGEN';
      expect(carNormal.fuelTypeLabel).toEqual('水素');
    });
    test('Null', async () => {
      expect(carNull.fuelTypeLabel).toEqual('N/A');
    });
  });

  describe('fuelTankCapLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.fuelTankCapLabel).toEqual('56');
    });

    test('Null', async () => {
      expect(carNull.fuelTankCapLabel).toEqual('N/A');
    });
  });

  describe('minTurningRadiusLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.minTurningRadiusLabel).toEqual('5.5');
    });

    test('Null', async () => {
      expect(carNull.minTurningRadiusLabel).toEqual('N/A');
    });
  });

  describe('fcrWltcLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.fcrWltcLabel).toEqual('14.6');
    });

    test('Null', async () => {
      expect(carNull.fcrWltcLabel).toEqual('N/A');
    });
  });

  describe('fcrWltcLLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.fcrWltcLLabel).toEqual('11.2');
    });

    test('Null', async () => {
      expect(carNull.fcrWltcLLabel).toEqual('N/A');
    });
  });

  describe('fcrWltcMLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.fcrWltcMLabel).toEqual('15.3');
    });

    test('Null', async () => {
      expect(carNull.fcrWltcMLabel).toEqual('N/A');
    });
  });

  describe('fcrWltcHLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.fcrWltcHLabel).toEqual('16.2');
    });

    test('Null', async () => {
      expect(carNull.fcrWltcHLabel).toEqual('N/A');
    });
  });

  describe('fcrWltcExhLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.fcrWltcExhLabel).toEqual('13.6');
    });

    test('Null', async () => {
      expect(carNull.fcrWltcExhLabel).toEqual('N/A');
    });
  });

  describe('fcrJc08Label', async () => {
    test('Normal', async () => {
      expect(carNormal.fcrJc08Label).toEqual('15.6');
    });

    test('Null', async () => {
      expect(carNull.fcrJc08Label).toEqual('N/A');
    });
  });

  describe('mpcWltcLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.mpcWltcLabel).toEqual('14.6');
    });

    test('Null', async () => {
      expect(carNull.mpcWltcLabel).toEqual('N/A');
    });
  });

  describe('ecrWltcLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.ecrWltcLabel).toEqual('0.0');
    });

    test('Null', async () => {
      expect(carNull.ecrWltcLabel).toEqual('N/A');
    });
  });

  describe('ecrWltcLLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.ecrWltcLLabel).toEqual('0.0');
    });

    test('Null', async () => {
      expect(carNull.ecrWltcLLabel).toEqual('N/A');
    });
  });

  describe('ecrWltcMLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.ecrWltcMLabel).toEqual('0.0');
    });

    test('Null', async () => {
      expect(carNull.ecrWltcMLabel).toEqual('N/A');
    });
  });

  describe('ecrWltcHLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.ecrWltcHLabel).toEqual('0.0');
    });

    test('Null', async () => {
      expect(carNull.ecrWltcHLabel).toEqual('N/A');
    });
  });

  describe('ecrWltcExhLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.ecrWltcExhLabel).toEqual('0.0');
    });

    test('Null', async () => {
      expect(carNull.ecrWltcExhLabel).toEqual('N/A');
    });
  });

  describe('ecrJc08Label', async () => {
    test('Normal', async () => {
      expect(carNormal.ecrJc08Label).toEqual('0.0');
    });

    test('Null', async () => {
      expect(carNull.ecrJc08Label).toEqual('N/A');
    });
  });

  describe('mpcJc08Label', async () => {
    test('Normal', async () => {
      expect(carNormal.mpcJc08Label).toEqual('0.0');
    });

    test('Null', async () => {
      expect(carNull.mpcJc08Label).toEqual('N/A');
    });
  });

  describe('fuelEfficiencyLabel', async () => {
    test('Normal', async () => {
      expect(carNormal.fuelEfficiencyLabel).toEqual(
        'ミラーサイクルエンジン, アイドリングストップ機構, 筒内直接噴射(DI), 可変バルブタイミング, 気筒休止(PY-RPS型車), 充電制御, ロックアップ機構付トルクコンバーター, 電動パワーステアリング'
      );
    });

    test('Null', async () => {
      expect(carNull.fuelEfficiencyLabel).toEqual('');
    });
  });
});
