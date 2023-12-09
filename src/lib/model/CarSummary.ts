import type { PrerenderEntryGeneratorMismatchHandler } from '@sveltejs/kit';

export interface CarSummary {
  id: number;
  modelName: string;
  modelCode: string;
  gradeName: string;
  makerName: string;
  powerTrain: PowerTrain;
  driveSystem: string;
  url?: string;
  imageUrl?: string;
  price?: number;
  body: Body;
  interior: Interior;
  steering: string;
  suspension: Suspension;
  break: Break;
  engine?: Engine;
  performance?: Performance;
}

export interface Body {
  type: BodyType;
  length?: number;
  width?: number;
  height?: number;
  wheelBase?: number;
  tread: Tread;
  roadClearance?: number;
  weight?: number;
}

interface Tread {
  front: number;
  rear: number;
}

interface Interior {
  length: number;
  width: number;
  height: number;
  ridingCap: number;
}

interface Suspension {
  front: string;
  rear: string;
}

interface Break {
  front: string;
  rear: string;
}

interface Engine {
  code: string;
  type: string;
  cylinderNum: number;
  cylinderLayout: string;
  valveSystem: string;
  displacement: number;
  bore: number;
  stroke: number;
  compressionRatio: number;
  maxOutputKw: number;
  maxOutputLowerRpm: number;
  maxOutputHigherRpm: number;
  maxTorqueNm: number;
  maxTorqueLowerRpm: number;
  maxTorqueHigherRpm: number;
  fuelSystem: string;
  fuelType: FuelType;
  fuelTankCap: number;
}

interface Performance {
  // [Comment("最小回転半径(m)")]
  minTurningRadius?: number;

  // [Comment("燃料消費率WLTCモード(km/L)")]
  fcrWltc?: number;

  // [Comment("燃料消費率WLTC市街地モード(km/L)")]
  fcrWltcL?: number;

  // [Comment("燃料消費率WLTC郊外モード(km/L)")]
  fcrWltcM?: number;

  // [Comment("燃料消費率WLTC高速道路モード(km/L)")]
  fcrWltcH?: number;

  // [Comment("燃料消費率WLTC高高速道路モード(km/L)")]
  fcrWltcExh?: number;

  // [Comment("燃料消費率JC08モード(km/L)")]
  fcrJc08?: number;

  // [Comment("一充電走行距離WLTCモード(km)")]
  mpcWltc?: number;

  // [Comment("交流電力消費率WTLCモード(Wh/km)")]
  ecrWltc?: number;

  // [Comment("交流電力消費率WLTC市街地モード(Wh/km)")]
  ecrWltcL?: number;

  // [Comment("交流電力消費率WLTC郊外モード(Wh/km)")]
  ecrWltcM?: number;

  // [Comment("交流電力消費率WLTC高速道路モード(Wh/km)")]
  ecrWltcH?: number;

  // [Comment("交流電力消費率WLTC高高速道路モード(Wh/km)")]
  ecrWltcExh?: number;

  // [Comment("交流電力消費率JC08モード(Wh/km)")]
  ecrJc08?: number;

  // [Comment("一充電走行距離JC08モード(km)")]
  mpcJc08?: number;

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
  | 'PICKUP_TRUCK';

type PowerTrain = 'ICE' | 'StrHV' | 'MldHV' | 'SerHV' | 'PHEV' | 'BEV' | 'RexEV' | 'FCEV';

type FuelType = 'DIESEL' | 'REGULAR' | 'PREMIUM' | 'LPG' | 'BIO' | 'HYDROGEN' | null;
