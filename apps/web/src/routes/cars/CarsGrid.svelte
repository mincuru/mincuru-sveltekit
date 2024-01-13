<script lang="ts">
  import type { Account } from '$lib/model/Account';
  import type { CarDisplay } from '$lib/model/CarDisplay';
  import { getContext, onDestroy } from 'svelte';
  import type { Writable } from 'svelte/store';
  import CarItem from './CarItem.svelte';
  export let cars: CarDisplay[];
  type Context = Writable<Account>;
  let account = getContext<Context>('account');

  const updateFavorite = (id: number, favorite: boolean) => {
    if (favorite) {
      $account.favorites.push(id);
    } else {
      $account.favorites = $account.favorites.filter((item) => item !== id);
    }
    console.log('updateFavorite', $account.favorites);
  };
</script>

<div class="flex flex-row flex-wrap gap-2.5 p-2.5">
  {#each cars as car}
    <CarItem {car} favorite={$account.favorites.includes(car.data.id)} {updateFavorite} />
  {/each}
</div>
