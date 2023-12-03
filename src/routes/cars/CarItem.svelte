<script lang="ts">
  import Favorite from '$lib/component/Favorite.svelte';
  import type {CarSummary} from '$lib/model/CarSummary';
  export let car: CarSummary;
  export let favorite: boolean;
  export let updateFavorite: Function;
  const toggleFavorite = (newFav: boolean) => updateFavorite(car.id, newFav);
</script>

<div
  class="card card-compact bg-base-100 w-full cursor-pointer shadow-xl hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.2))] sm:w-64"
>
  <figure>
    <div class="relative w-full">
      <a href="/cars/{car.id}">
        <img class="h-40 w-full object-cover" src={car.imageUrl} alt={car.modelName} />
      </a>
      <div class="absolute bottom-1 right-1">
        <Favorite bind:favorite toggle={toggleFavorite} />
      </div>
    </div>
  </figure>
  <a href="/cars/{car.id}">
    <div class="card-body">
      <div class="flex flex-row">
        <h2 class="card-title shrink truncate">{car.modelName}</h2>
      </div>
      <p>{car.makerName}</p>
      <p>{car.price.toLocaleString()}円</p>
      <p class="line-clamp-2 w-full">
        全長:{car.body.length.toLocaleString()}mm, 全幅:{car.body.width.toLocaleString()}mm, 全高:{car.body.height.toLocaleString()}mm
      </p>
      <p>{car.powerTrain}, {car.driveSystem}, {car.fuelType}</p>
    </div>
  </a>
</div>
