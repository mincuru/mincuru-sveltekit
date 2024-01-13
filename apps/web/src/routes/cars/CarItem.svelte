<script lang="ts">
  import Favorite from '$lib/component/Favorite.svelte';
  import type { CarDisplay } from '$lib/model/CarDisplay';
  export let car: CarDisplay;
  export let favorite: boolean;
  export let updateFavorite: (id: number, favorite: boolean) => void;
  const toggleFavorite = (newFav: boolean) => updateFavorite(car.id, newFav);
</script>

<div
  class="card card-compact bg-base-100 w-full cursor-pointer shadow-xl hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.2))] sm:w-64"
  data-testid="card-car"
>
  <figure>
    <div class="relative w-full">
      <a href="/cars/{car.id}" data-testid="item-page-link">
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
        <h2 class="card-title shrink truncate" data-testid="title">{car.modelName}</h2>
      </div>
      <p data-testid="maker-name">{car.makerName}</p>
      <p class="text-right" data-testid="price">{car.priceLabel}円</p>
      <p class="line-clamp-2 w-full" data-testid="body-size">
        全長:{car.bodyLengthLabel}mm 幅:{car.bodyWidthLabel}mm 高さ:{car.bodyHeightLabel}mm
      </p>
      <p data-testid="other-text">
        {car.bodyTypeLabel}
        {car.powerTrainLabel}
        {car.driveSystem}
        {car.fuelTypeLabel}
      </p>
    </div>
  </a>
</div>
