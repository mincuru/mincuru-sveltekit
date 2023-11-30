<script lang="ts">
  import type { Car } from '$lib/model/car';
  import CarItem from './CarItem.svelte';
  export let cars: Car[];
  export let favorites: number[];
  function updateFavorite(id: number, favorite: boolean) {
    // ここでfavorites配列を更新したい
    if (favorite) {
      favorites.push(id);
    } else {
      favorites = favorites.filter((item) => item !== num);
    }
    console.log('updateFavorite', favorites);
  }
</script>

<div class="flex flex-row flex-wrap gap-2.5 p-2.5">
  {#each cars as car}
    <CarItem {car} favorite={favorites.includes(car.id)} {updateFavorite} />
  {/each}
</div>
