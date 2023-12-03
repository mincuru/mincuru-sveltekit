export interface CarsFilter {
  makers: KeyValuePair[];
  bodyTypes: KeyValuePair[];
  powerTrains: KeyValuePair[];
  driveSystems: KeyValuePair[];
}

export interface KeyValuePair {
  title: string;
  value: string;
  checked: boolean;
}
