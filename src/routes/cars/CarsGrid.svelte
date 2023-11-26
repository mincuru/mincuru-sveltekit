<script lang="ts">
  import type { Car } from '$lib/model/car';
  import CarItem from './CarItem.svelte';
  export let cars: Car[];
</script>

<div class="flex flex-row flex-wrap gap-2.5 p-2.5">
  {#each cars as car}
    <CarItem {car} />
  {/each}
</div>
