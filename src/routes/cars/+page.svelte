<script lang="ts">
  import TagArea from './TagArea.svelte';
  import SideNav from './SideNav.svelte';
  import CarsGrid from './CarsGrid.svelte';
  import type { CarsFilter } from './CarsFilter';
  import type { CarSummary } from '$lib/model/CarSummary';
  import type { Account } from '$lib/model/Account';

  let filter: CarsFilter = {
    makers: [
      { title: 'マツダ', value: 'マツダ', checked: false },
      { title: 'トヨタ', value: 'トヨタ', checked: false },
      { title: 'ホンダ', value: 'ホンダ', checked: false },
      { title: '日産', value: '日産', checked: true }
    ],
    bodyTypes: [
      { title: 'SUV', value: 'SUV', checked: false },
      { title: 'Sedan', value: 'SEDAN', checked: true },
      { title: 'ハッチバック', value: 'HATCHBACK', checked: false }
    ],
    powerTrains: [
      { title: 'エンジン', value: 'ICE', checked: false },
      { title: 'ストロングHV', value: 'StrHV', checked: false },
      { title: 'マイルドHV', value: 'MldHV', checked: true },
      { title: 'バッテリーEV', value: 'BEV', checked: false },
      { title: 'シリーズHV', value: 'SerHV', checked: false }
    ],
    driveSystems: [
      { title: 'FF', value: 'FF', checked: false },
      { title: 'FR', value: 'FR', checked: true },
      { title: 'RR', value: 'RR', checked: false }
    ]
  };

  let cars: CarSummary[] = [
    {
      id: 1,
      modelName: 'CX-5',
      makerName: 'マツダ',
      url: 'https://www.mazda.co.jp/cars/cx-5/',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
      price: 3200000,
      body: {
        // type: 'SUV',
        length: 4747,
        width: 1850,
        height: 1690
      },
      powerTrain: 'ICE',
      driveSystem: 'AWD',
      fuelType: 'REGULAR'
    },
    {
      id: 2,
      modelName: 'カローラツーリング',
      makerName: 'トヨタ',
      url: 'https://toyota.jp/corollatouring/',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/8a/Toyota_COROLLA_TOURING_HYBRID_W%C3%97B_2WD_%286AA-ZWE211W-AWXSB%29_front.jpg',
      price: 2678500,
      body: {
        // type: 'STATION_WAGON',
        length: 4495,
        width: 1745,
        height: 1460
      },
      powerTrain: 'StrHV',
      driveSystem: 'AWD',
      fuelType: 'REGULAR'
    },
    {
      id: 3,
      modelName: 'NSX',
      makerName: 'ホンダ',
      url: 'https://www.honda.co.jp/NSX/types/',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_NSX_3.5_CAA-NC1_%2820190722%29_01.jpg',
      price: 27940000,
      body: {
        // type: 'COUPE',
        length: 4535,
        width: 1940,
        height: 1215
      },
      powerTrain: 'MldHV',
      driveSystem: 'AWD',
      fuelType: 'PREMIUM'
    },
    {
      id: 4,
      modelName: 'Honda e',
      makerName: 'ホンダ',
      url: 'https://www.honda.co.jp/honda-e/',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/9/9e/Honda_e_Advance_%28ZAA-ZC7%29_front.jpg',
      price: 4950000,
      body: {
        // type: 'HATCHBACK',
        length: 3895,
        width: 1750,
        height: 1510
      },
      powerTrain: 'BEV',
      driveSystem: 'RR',
      fuelType: ''
      // new FuelType("")
    },
    {
      id: 5,
      modelName: 'ノート',
      makerName: '日産',
      url: 'https://www3.nissan.co.jp/vehicles/new/note.html',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/0a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg',
      price: 2445300,
      body: {
        // type: 'HATCHBACK',
        length: 4045,
        width: 1695,
        height: 1520
      },
      powerTrain: 'SerHV',
      driveSystem: 'FF',
      fuelType: 'REGULAR'
    },
    {
      id: 6,
      modelName: '3シリーズツーリング',
      makerName: 'BMW',
      url: 'https://www.bmw.co.jp/ja/all-models/3-series/touring/2019/bmw-3-series-touring-inspire.html',
      imageUrl: '',
      price: 6340000,
      body: {
        // type: 'STATION_WAGON',
        length: 4715,
        width: 1825,
        height: 1475
      },
      powerTrain: 'ICE',
      driveSystem: 'AWD',
      fuelType: 'DIESEL'
    }
  ];

  let account: Account = {
    id: 1,
    name: 'test',
    email: '',
    favorites: []
  };
</script>

<div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <div class="flex-auto">
      <div class="flex flex-col">
        <TagArea bind:filter />
        <CarsGrid bind:cars bind:favorites={account.favorites} />
      </div>
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-64 p-4">
      <!-- Sidebar content here -->
      <SideNav bind:filter />
    </ul>
  </div>
</div>
