<script lang="ts">
  import type { Account } from '$lib/model/Account';
  import { CarDisplay, type Car } from '$lib/model/CarDisplay';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import CarItem from './CarItem.svelte';

  type Context = Writable<Account>;
  let account = getContext<Context>('account');

  type CarContext = Writable<Car[]>;
  let cars = getContext<CarContext>('cars');

  const updateFavorite = (id: number, favorite: boolean) => {
    if (favorite) {
      $account.favorites.push(id);
    } else {
      $account.favorites = $account.favorites.filter((item) => item !== id);
    }
    console.log('updateFavorite', $account.favorites);
  };
</script>

<div class="flex flex-row flex-wrap gap-2.5 p-2.5" data-testid="car-items">
  {#if $cars.length > 0}
    {#each $cars as car}
      <CarItem
        car={new CarDisplay(car)}
        favorite={$account.favorites.includes(car.id)}
        {updateFavorite}
      />
    {/each}
  {:else}
    該当するデータが見つかりませんでした。
  {/if}
</div>
