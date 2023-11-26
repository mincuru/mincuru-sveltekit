export interface CarsFilter {
  makers: KeyValuePair[];
  bodyTypes: KeyValuePair[];
  powerTrains: KeyValuePair[];
  driveSystems: KeyValuePair[];
}

interface KeyValuePair {
  title: string;
  value: string;
  checked: boolean;
}
