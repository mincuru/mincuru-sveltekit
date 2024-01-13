<script lang="ts">
  import { goto } from '$app/navigation';
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
</script>

<div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <div class="flex-auto">
      <div class="flex flex-col">
        <TagArea bind:filter {handleChangeFilter} />
        <CarsGrid {cars} />
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
