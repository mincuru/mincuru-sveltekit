<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Account } from '$lib/model/Account';
  import { CarDisplay } from '$lib/model/CarDisplay';
  import type { PageData } from './$types';
  import type { CarsFilter } from './CarsFilter';
  import CarsGrid from './CarsGrid.svelte';
  import SideNav from './SideNav.svelte';
  import TagArea from './TagArea.svelte';
  export let data: PageData;

  const handleChangeFilter = async () => {
    const makerNames = filter.makers.filter((i) => i.checked).map((i) => i.value);
    const bodyTypes = filter.bodyTypes.filter((i) => i.checked).map((i) => i.value);
    const powerTrains = filter.powerTrains.filter((i) => i.checked).map((i) => i.value);
    const driveSystems = filter.driveSystems.filter((i) => i.checked).map((i) => i.value);
    let queryString = '?';
    if (makerNames.length > 0) {
      queryString += `makerNames=${makerNames.join(',')}`;
    }
    if (bodyTypes.length > 0) {
      queryString += `&bodyTypes=${bodyTypes.join(',')}`;
    }
    if (powerTrains.length > 0) {
      queryString += `&powerTrains=${powerTrains.join(',')}`;
    }
    if (driveSystems.length > 0) {
      queryString += `&driveSystems=${driveSystems.join(',')}`;
    }
    await goto(queryString);
    filter = filter;
  };

  $: cars = data.cars.map((car) => new CarDisplay(car));

  let filter: CarsFilter = data.filter;
  // let filter: CarsFilter = {
  //   makers: [
  //     { title: 'マツダ', value: 'マツダ', checked: false },
  //     { title: 'トヨタ', value: 'トヨタ', checked: false },
  //     { title: 'ホンダ', value: 'ホンダ', checked: false },
  //     { title: '日産', value: '日産', checked: true }
  //   ],
  //   bodyTypes: [
  //     { title: 'SUV', value: 'SUV', checked: false },
  //     { title: 'Sedan', value: 'SEDAN', checked: true },
  //     { title: 'ハッチバック', value: 'HATCHBACK', checked: false }
  //   ],
  //   powerTrains: [
  //     { title: 'エンジン', value: 'ICE', checked: false },
  //     { title: 'ストロングHV', value: 'StrHV', checked: false },
  //     { title: 'マイルドHV', value: 'MldHV', checked: true },
  //     { title: 'バッテリーEV', value: 'BEV', checked: false },
  //     { title: 'シリーズHV', value: 'SerHV', checked: false }
  //   ],
  //   driveSystems: [
  //     { title: 'FF', value: 'FF', checked: false },
  //     { title: 'FR', value: 'FR', checked: true },
  //     { title: 'RR', value: 'RR', checked: false }
  //   ]
  // };

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
        <TagArea bind:filter {handleChangeFilter} />
        <CarsGrid {cars} bind:favorites={account.favorites} />
      </div>
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-64 p-4">
      <!-- Sidebar content here -->
      <SideNav bind:filter {handleChangeFilter} />
    </ul>
  </div>
</div>
