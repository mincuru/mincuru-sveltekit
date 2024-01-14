export class CarDisplay {
  id!: number;
  modelName!: string;
  modelCode!: string;
  gradeName!: string;
  makerName!: string;
  powerTrain!: PowerTrain;
  driveSystem!: string;
  url!: string | null;
  imageUrl!: string | null;
  price!: number | null;
  bodyType!: BodyType;
  bodyLength!: number | null;
  bodyWidth!: number | null;
  bodyHeight!: number | null;
  wheelBase!: number | null;
  treadFront!: number | null;
  treadRear!: number | null;
  roadClearance!: number | null;
  weight!: number | null;
  interiorLength!: number | null;
  interiorWidth!: number | null;
  interiorHeight!: number | null;
  ridingCap!: number | null;
  steering!: string | null;
  suspensionFront!: string | null;
  suspensionRear!: string | null;
  breakFront!: string | null;
  breakRear!: string | null;
  engineCode!: string | null;
  engineType!: string | null;
  engineCylinderNum!: number | null;
  engineCylinderLayout!: string | null;
  engineValveSystem!: string | null;
  engineDisplacement!: number | null;
  engineBore!: number | null;
  engineStroke!: number | null;
  engineCompressionRatio!: number | null;
  engineMaxOutputKw!: number | null;
  engineMaxOutputLowerRpm!: number | null;
  engineMaxOutputHigherRpm!: number | null;
  engineMaxTorqueNm!: number | null;
  engineMaxTorqueLowerRpm!: number | null;
  engineMaxTorqueHigherRpm!: number | null;
  fuelSystem!: string | null;
  fuelType!: FuelType | null;
  fuelTankCap!: number | null;
  minTurningRadius!: number | null;
  fcrWltc!: number | null;
  fcrWltcL!: number | null;
  fcrWltcM!: number | null;
  fcrWltcH!: number | null;
  fcrWltcExh!: number | null;
  fcrJc08!: number | null;
  mpcWltc!: number | null;
  ecrWltc!: number | null;
  ecrWltcL!: number | null;
  ecrWltcM!: number | null;
  ecrWltcH!: number | null;
  ecrWltcExh!: number | null;
  ecrJc08!: number | null;
  mpcJc08!: number | null;
  fuelEfficiency!: string[];

  public constructor(props: Car) {
    this.id = props.id;
    this.modelName = props.modelName;
    this.modelCode = props.modelCode;
    this.gradeName = props.gradeName;
    this.makerName = props.makerName;
    this.powerTrain = props.powerTrain;
    this.driveSystem = props.driveSystem;
    this.url = props.url;
    this.imageUrl = props.imageUrl;
    this.price = props.price;
    this.bodyType = props.bodyType;
    this.bodyLength = props.bodyLength;
    this.bodyWidth = props.bodyWidth;
    this.bodyHeight = props.bodyHeight;
    this.wheelBase = props.wheelBase;
    this.treadFront = props.treadFront;
    this.treadRear = props.treadRear;
    this.roadClearance = props.roadClearance;
    this.weight = props.weight;
    this.interiorLength = props.interiorLength;
    this.interiorWidth = props.interiorWidth;
    this.interiorHeight = props.interiorHeight;
    this.ridingCap = props.ridingCap;
    this.steering = props.steering;
    this.suspensionFront = props.suspensionFront;
    this.suspensionRear = props.suspensionRear;
    this.breakFront = props.breakFront;
    this.breakRear = props.breakRear;
    this.engineCode = props.engineCode;
    this.engineType = props.engineType;
    this.engineCylinderNum = props.engineCylinderNum;
    this.engineCylinderLayout = props.engineCylinderLayout;
    this.engineValveSystem = props.engineValveSystem;
    this.engineDisplacement = props.engineDisplacement;
    this.engineBore = props.engineBore;
    this.engineStroke = props.engineStroke;
    this.engineCompressionRatio = props.engineCompressionRatio;
    this.engineMaxOutputKw = props.engineMaxOutputKw;
    this.engineMaxOutputLowerRpm = props.engineMaxOutputLowerRpm;
    this.engineMaxOutputHigherRpm = props.engineMaxOutputHigherRpm;
    this.engineMaxTorqueNm = props.engineMaxTorqueNm;
    this.engineMaxTorqueLowerRpm = props.engineMaxTorqueLowerRpm;
    this.engineMaxTorqueHigherRpm = props.engineMaxTorqueHigherRpm;
    this.fuelSystem = props.fuelSystem;
    this.fuelType = props.fuelType;
    this.fuelTankCap = props.fuelTankCap;
    this.minTurningRadius = props.minTurningRadius;
    this.fcrWltc = props.fcrWltc;
    this.fcrWltcL = props.fcrWltcL;
    this.fcrWltcM = props.fcrWltcM;
    this.fcrWltcH = props.fcrWltcH;
    this.fcrWltcExh = props.fcrWltcExh;
    this.fcrJc08 = props.fcrJc08;
    this.mpcWltc = props.mpcWltc;
    this.ecrWltc = props.ecrWltc;
    this.ecrWltcL = props.ecrWltcL;
    this.ecrWltcM = props.ecrWltcM;
    this.ecrWltcH = props.ecrWltcH;
    this.ecrWltcExh = props.ecrWltcExh;
    this.ecrJc08 = props.ecrJc08;
    this.mpcJc08 = props.mpcJc08;
    this.fuelEfficiency = props.fuelEfficiency;
  }

  // メソッド
  // パワートレインのラベルを返す
  get powerTrainLabel(): string {
    switch (this.powerTrain) {
      case 'ICE':
        return 'エンジン';
      case 'StrHV':
        return 'ストロングHV';
      case 'MldHV':
        return 'マイルドHV';
      case 'SerHV':
        return 'シリーズHV';
      case 'PHEV':
        return 'プラグインHV';
      case 'BEV':
        return 'バッテリーEV';
      case 'RexEV':
        return 'レンジエクステンダーEV';
      case 'FCEV':
        return '燃料電池車';
      default:
        return 'N/A';
    }
  }

  // 価格ラベルを返す
  get priceLabel(): string {
    return this.price?.toLocaleString() ?? 'N/A';
  }

  // ボディタイプのラベルを返す
  get bodyTypeLabel(): string {
    switch (this.bodyType) {
      case 'SEDAN':
        return 'セダン';
      case 'HATCHBACK':
        return 'ハッチバック';
      case 'CROSS_COUNTRY':
        return 'クロスカントリー';
      case 'K':
        return 'K';
      case 'COUPE':
        return 'クーペ';
      case 'STATION_WAGON':
        return 'ステーションワゴン';
      case 'SUV':
        return 'SUV';
      case 'ONEBOX':
        return 'ワンボックス';
      case 'K_OPEN':
        return 'Kオープン';
      case 'K_ONEBOX':
        return 'Kワンボックス';
      case 'OPEN':
        return 'オープン';
      case 'PICKUP_TRUCK':
        return 'ピックアップトラック';
      default:
        return 'N/A';
    }
  }

  get bodyLengthLabel(): string {
    return this.bodyLength?.toFixed(0) ?? 'N/A';
  }

  get bodyWidthLabel(): string {
    return this.bodyWidth?.toFixed(0) ?? 'N/A';
  }

  get bodyHeightLabel(): string {
    return this.bodyHeight?.toFixed(0) ?? 'N/A';
  }

  get wheelBaseLabel(): string {
    return this.wheelBase?.toFixed(0) ?? 'N/A';
  }

  get treadFrontLabel(): string {
    return this.treadFront?.toFixed(0) ?? 'N/A';
  }

  get treadRearLabel(): string {
    return this.treadRear?.toString() ?? 'N/A';
  }

  get roadClearanceLabel(): string {
    return this.roadClearance?.toFixed(0) ?? 'N/A';
  }

  get weightLabel(): string {
    return this.weight?.toFixed(0) ?? 'N/A';
  }

  get interiorLengthLabel(): string {
    return this.interiorLength?.toFixed(0) ?? 'N/A';
  }

  get interiorWidthLabel(): string {
    return this.interiorWidth?.toFixed(0) ?? 'N/A';
  }

  get interiorHeightLabel(): string {
    return this.interiorHeight?.toFixed(0) ?? 'N/A';
  }

  get ridingCapLabel(): string {
    return this.ridingCap?.toFixed(0) ?? 'N/A';
  }

  get steeringLabel(): string {
    return this.steering ?? 'N/A';
  }

  get suspensionFrontLabel(): string {
    return this.suspensionFront ?? 'N/A';
  }

  get suspensionRearLabel(): string {
    return this.suspensionRear ?? 'N/A';
  }

  get breakFrontLabel(): string {
    return this.breakFront ?? 'N/A';
  }

  get breakRearLabel(): string {
    return this.breakRear ?? 'N/A';
  }

  get engineCodeLabel(): string {
    return this.engineCode ?? 'N/A';
  }

  get engineTypeLabel(): string {
    return this.engineType ?? 'N/A';
  }

  get engineCylinderNumLabel(): string {
    return this.engineCylinderNum?.toFixed(0) ?? 'N/A';
  }

  get engineCylinderLayoutLabel(): string {
    return this.engineCylinderLayout ?? 'N/A';
  }

  get engineValveSystemLabel(): string {
    return this.engineValveSystem ?? 'N/A';
  }

  get engineDisplacementLabel(): string {
    return this.engineDisplacement?.toFixed(3) ?? 'N/A';
  }

  get engineBoreLabel(): string {
    return this.engineBore?.toFixed(1) ?? 'N/A';
  }

  get engineStrokeLabel(): string {
    return this.engineStroke?.toFixed(1) ?? 'N/A';
  }

  get engineCompressionRatioLabel(): string {
    return this.engineCompressionRatio?.toFixed(1) ?? 'N/A';
  }

  get engineMaxOutputKwLabel(): string {
    return this.engineMaxOutputKw?.toFixed(0) ?? 'N/A';
  }

  get engineMaxOutputLowerRpmLabel(): string {
    return this.engineMaxOutputLowerRpm?.toFixed(0) ?? 'N/A';
  }

  get engineMaxOutputHigherRpmLabel(): string {
    return this.engineMaxOutputHigherRpm?.toFixed(0) ?? 'N/A';
  }

  get engineMaxTorqueNmLabel(): string {
    return this.engineMaxTorqueNm?.toFixed(0) ?? 'N/A';
  }

  get engineMaxTorqueLowerRpmLabel(): string {
    return this.engineMaxTorqueLowerRpm?.toFixed(0) ?? 'N/A';
  }

  get engineMaxTorqueHigherRpmLabel(): string {
    return this.engineMaxTorqueHigherRpm?.toFixed(0) ?? 'N/A';
  }

  get fuelSystemLabel(): string {
    return this.fuelSystem ?? 'N/A';
  }

  // 燃料種別のラベルを返す
  get fuelTypeLabel(): string {
    switch (this.fuelType) {
      case 'DIESEL':
        return '軽油';
      case 'REGULAR':
        return '無鉛レギュラーガソリン';
      case 'PREMIUM':
        return '無鉛プレミアムガソリン';
      case 'LPG':
        return 'LPG';
      case 'BIO':
        return 'バイオ燃料';
      case 'HYDROGEN':
        return '水素';
      default:
        return 'N/A';
    }
  }

  get fuelTankCapLabel(): string {
    return this.fuelTankCap?.toFixed(0) ?? 'N/A';
  }

  get minTurningRadiusLabel(): string {
    return this.minTurningRadius?.toFixed(1) ?? 'N/A';
  }

  get fcrWltcLabel(): string {
    return this.fcrWltc?.toFixed(1) ?? 'N/A';
  }

  get fcrWltcLLabel(): string {
    return this.fcrWltcL?.toFixed(1) ?? 'N/A';
  }

  get fcrWltcMLabel(): string {
    return this.fcrWltcM?.toFixed(1) ?? 'N/A';
  }

  get fcrWltcHLabel(): string {
    return this.fcrWltcH?.toFixed(1) ?? 'N/A';
  }

  get fcrWltcExhLabel(): string {
    return this.fcrWltcExh?.toFixed(1) ?? 'N/A';
  }

  get fcrJc08Label(): string {
    return this.fcrJc08?.toFixed(1) ?? 'N/A';
  }

  get mpcWltcLabel(): string {
    return this.mpcWltc?.toFixed(1) ?? 'N/A';
  }

  get ecrWltcLabel(): string {
    return this.ecrWltc?.toFixed(1) ?? 'N/A';
  }

  get ecrWltcLLabel(): string {
    return this.ecrWltcL?.toFixed(1) ?? 'N/A';
  }

  get ecrWltcMLabel(): string {
    return this.ecrWltcM?.toFixed(1) ?? 'N/A';
  }

  get ecrWltcHLabel(): string {
    return this.ecrWltcH?.toFixed(1) ?? 'N/A';
  }

  get ecrWltcExhLabel(): string {
    return this.ecrWltcExh?.toFixed(1) ?? 'N/A';
  }

  get ecrJc08Label(): string {
    return this.ecrJc08?.toFixed(1) ?? 'N/A';
  }

  get mpcJc08Label(): string {
    return this.mpcJc08?.toFixed(1) ?? 'N/A';
  }

  get fuelEfficiencyLabel(): string {
    return this.fuelEfficiency.join(', ');
  }
}

export type BodyType =
  | 'SEDAN'
  | 'HATCHBACK'
  | 'CROSS_COUNTRY'
  | 'K'
  | 'COUPE'
  | 'STATION_WAGON'
  | 'SUV'
  | 'ONEBOX'
  | 'K_OPEN'
  | 'K_ONEBOX'
  | 'OPEN'
  | 'PICKUP_TRUCK';

export type PowerTrain = 'ICE' | 'StrHV' | 'MldHV' | 'SerHV' | 'PHEV' | 'BEV' | 'RexEV' | 'FCEV';

export type FuelType = 'DIESEL' | 'REGULAR' | 'PREMIUM' | 'LPG' | 'BIO' | 'HYDROGEN';

export interface Car {
  id: number;
  modelName: string;
  modelCode: string;
  gradeName: string;
  makerName: string;
  powerTrain: PowerTrain;
  driveSystem: string;
  url: string | null;
  imageUrl: string | null;
  price: number | null;
  bodyType: BodyType;
  bodyLength: number | null;
  bodyWidth: number | null;
  bodyHeight: number | null;
  wheelBase: number | null;
  treadFront: number | null;
  treadRear: number | null;
  roadClearance: number | null;
  weight: number | null;
  interiorLength: number | null;
  interiorWidth: number | null;
  interiorHeight: number | null;
  ridingCap: number | null;
  steering: string | null;
  suspensionFront: string | null;
  suspensionRear: string | null;
  breakFront: string | null;
  breakRear: string | null;
  engineCode: string | null;
  engineType: string | null;
  engineCylinderNum: number | null;
  engineCylinderLayout: string | null;
  engineValveSystem: string | null;
  engineDisplacement: number | null;
  engineBore: number | null;
  engineStroke: number | null;
  engineCompressionRatio: number | null;
  engineMaxOutputKw: number | null;
  engineMaxOutputLowerRpm: number | null;
  engineMaxOutputHigherRpm: number | null;
  engineMaxTorqueNm: number | null;
  engineMaxTorqueLowerRpm: number | null;
  engineMaxTorqueHigherRpm: number | null;
  fuelSystem: string | null;
  fuelType: FuelType | null;
  fuelTankCap: number | null;
  minTurningRadius: number | null;
  fcrWltc: number | null;
  fcrWltcL: number | null;
  fcrWltcM: number | null;
  fcrWltcH: number | null;
  fcrWltcExh: number | null;
  fcrJc08: number | null;
  mpcWltc: number | null;
  ecrWltc: number | null;
  ecrWltcL: number | null;
  ecrWltcM: number | null;
  ecrWltcH: number | null;
  ecrWltcExh: number | null;
  ecrJc08: number | null;
  mpcJc08: number | null;
  fuelEfficiency: string[];
}
