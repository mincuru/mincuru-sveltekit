<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Car } from '$lib/model/CarDisplay';
  import { Menu } from '@steeze-ui/material-design-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { PageData } from './$types';
  import type { CarsFilter } from './CarsFilter';
  import CarsGrid from './CarsGrid.svelte';
  import SideNav from './SideNav.svelte';
  import TagArea from './TagArea.svelte';
  export let data: PageData;

  const cars = writable<Car[]>(data.cars);
  setContext('cars', cars);

  const filter = writable<CarsFilter>(data.filter);
  setContext('filter', filter);

  const handleChangeFilter = async () => {
    const makerNames = $filter.makers.filter((i) => i.checked).map((i) => i.value);
    const bodyTypes = $filter.bodyTypes.filter((i) => i.checked).map((i) => i.value);
    const powerTrains = $filter.powerTrains.filter((i) => i.checked).map((i) => i.value);
    const driveSystems = $filter.driveSystems.filter((i) => i.checked).map((i) => i.value);
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
    filter.set(data.filter);
    cars.set(data.cars);
  };
</script>

<svelte:head>
  <title>みんクル / クルマ検索</title>
</svelte:head>

<div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <div class="flex-auto">
      <div class="flex flex-col p-2.5">
        <label for="my-drawer-2" class="show btn btn-square btn-ghost drawer-button lg:hidden">
          <Icon src={Menu} size="24" />
        </label>
        <TagArea {handleChangeFilter} />
        <CarsGrid />
      </div>
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-64 p-4">
      <!-- Sidebar content here -->
      <SideNav {handleChangeFilter} />
    </ul>
  </div>
</div>
