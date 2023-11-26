export interface Car {
  id: number;
  modelName: string;
  makerName: string;
  powerTrain: string;
  driveSystem: string;
  fuelType: string;
  // maker: Maker;
  url: string;
  imageUrl: string;
  price: number;
  body: Body;
  // powerTrain: PowerTrain;
  // driveSystem: DriveSystem;
  // fuelType: FuelType;
}

export interface Body {
  // type: BodyType;
  length: number;
  width: number;
  height: number;
}
