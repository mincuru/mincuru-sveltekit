export interface CarDetail {
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
  body: Body;
  interior: Interior | null;
  steering: string | null;
  suspension: Suspension | null;
  break: Break | null;
  engine: Engine | null;
  performance: Performance | null;
}

export interface Body {
  type: BodyType;
  length: number | null;
  width: number | null;
  height: number | null;
  wheelBase: number | null;
  tread: Tread | null;
  roadClearance: number | null;
  weight: number | null;
}

interface Tread {
  front: number | null;
  rear: number | null;
}

interface Interior {
  length: number | null;
  width: number | null;
  height: number | null;
  ridingCap: number | null;
}

interface Suspension {
  front: string | null;
  rear: string | null;
}

interface Break {
  front: string | null;
  rear: string | null;
}

interface Engine {
  code: string | null;
  type: string | null;
  cylinderNum: number | null;
  cylinderLayout: string | null;
  valveSystem: string | null;
  displacement: number | null;
  bore: number | null;
  stroke: number | null;
  compressionRatio: number | null;
  maxOutputKw: number | null;
  maxOutputLowerRpm: number | null;
  maxOutputHigherRpm: number | null;
  maxTorqueNm: number | null;
  maxTorqueLowerRpm: number | null;
  maxTorqueHigherRpm: number | null;
  fuelSystem: string | null;
  fuelType: FuelType | null;
  fuelTankCap: number | null;
}

interface Performance {
  // [Comment("最小回転半径(m)")]
  minTurningRadius: number | null;

  // [Comment("燃料消費率WLTCモード(km/L)")]
  fcrWltc: number | null;

  // [Comment("燃料消費率WLTC市街地モード(km/L)")]
  fcrWltcL: number | null;

  // [Comment("燃料消費率WLTC郊外モード(km/L)")]
  fcrWltcM: number | null;

  // [Comment("燃料消費率WLTC高速道路モード(km/L)")]
  fcrWltcH: number | null;

  // [Comment("燃料消費率WLTC高高速道路モード(km/L)")]
  fcrWltcExh: number | null;

  // [Comment("燃料消費率JC08モード(km/L)")]
  fcrJc08: number | null;

  // [Comment("一充電走行距離WLTCモード(km)")]
  mpcWltc: number | null;

  // [Comment("交流電力消費率WTLCモード(Wh/km)")]
  ecrWltc: number | null;

  // [Comment("交流電力消費率WLTC市街地モード(Wh/km)")]
  ecrWltcL: number | null;

  // [Comment("交流電力消費率WLTC郊外モード(Wh/km)")]
  ecrWltcM: number | null;

  // [Comment("交流電力消費率WLTC高速道路モード(Wh/km)")]
  ecrWltcH: number | null;

  // [Comment("交流電力消費率WLTC高高速道路モード(Wh/km)")]
  ecrWltcExh: number | null;

  // [Comment("交流電力消費率JC08モード(Wh/km)")]
  ecrJc08: number | null;

  // [Comment("一充電走行距離JC08モード(km)")]
  mpcJc08: number | null;

  fuelEfficiency: string[];
}

type BodyType =
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
  | 'PICKUP_TRUCK'
  | null;

type PowerTrain = 'ICE' | 'StrHV' | 'MldHV' | 'SerHV' | 'PHEV' | 'BEV' | 'RexEV' | 'FCEV' | null;

type FuelType = 'DIESEL' | 'REGULAR' | 'PREMIUM' | 'LPG' | 'BIO' | 'HYDROGEN' | null;
