<script lang="ts">
  import Favorite from '$lib/component/Favorite.svelte';
  export let car: Car;
  export let favorite: boolean;
  export let updateFavorite;
  const toggleFavorite = (newFav: boolean) => updateFavorite(car.id, newFav);
</script>

<div
  class="card card-compact bg-base-100 w-full cursor-pointer shadow-xl hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.2))] sm:w-64"
>
  <figure>
    <img class="h-40 w-full object-cover" src={car.imageUrl} alt={car.modelName} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{car.modelName}</h2>
    <p>{car.makerName}</p>
    <p>{car.price}円</p>
    <p class="line-clamp-2 w-full">
      全長:{car.body.length}mm, 全幅:{car.body.width}mm, 全高:{car.body.height}mm
    </p>
    <p>{car.powerTrain}, {car.driveSystem}, {car.fuelType}</p>
    <div class="card-actions justify-end">
      <Favorite bind:favorite toggle={toggleFavorite} />
    </div>
  </div>
</div>
