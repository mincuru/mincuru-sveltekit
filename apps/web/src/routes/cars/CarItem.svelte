<script lang="ts">
  import Favorite from '$lib/component/Favorite.svelte';
  import type { CarDisplay } from '$lib/model/CarDisplay';
  export let car: CarDisplay;
  export let favorite: boolean;
  export let updateFavorite: (id: number, favorite: boolean) => void;
  const toggleFavorite = (newFav: boolean) => updateFavorite(car.data.id, newFav);
</script>

<div
  class="card card-compact w-full cursor-pointer bg-base-100 shadow-xl hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.2))] sm:w-64"
>
  <figure>
    <div class="relative w-full">
      <a href="/cars/{car.data.id}">
        <img class="h-40 w-full object-cover" src={car.data.imageUrl} alt={car.data.modelName} />
      </a>
      <div class="absolute bottom-1 right-1">
        <Favorite bind:favorite toggle={toggleFavorite} />
      </div>
    </div>
  </figure>
  <a href="/cars/{car.data.id}">
    <div class="card-body">
      <div class="flex flex-row">
        <h2 class="card-title shrink truncate">{car.data.modelName}</h2>
      </div>
      <p>{car.data.makerName}</p>
      <p class="text-right">{car.data.price?.toLocaleString()}円</p>
      <p class="line-clamp-2 w-full">
        全長:{car.data.body?.length?.toLocaleString() ?? 'N/A'}mm 幅:{car.data.body?.width?.toLocaleString() ??
          'N/A'}mm 高さ:{car.data.body?.height?.toLocaleString() ?? 'N/A'}mm
      </p>
      <p>{car.bodyTypeLabel} {car.powerTrainLabel} {car.data.driveSystem} {car.fuelTypeLabel}</p>
    </div>
  </a>
</div>
