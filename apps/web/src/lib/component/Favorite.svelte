<script lang="ts">
  import { enhance } from '$app/forms';
  import type { Account } from '$lib/model/Account';
  import { Star, StarBorder } from '@steeze-ui/material-design-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  export let carId: number;
  export let favorite: boolean;
  export let toggle: (favorite: boolean) => void;

  type Context = Writable<Account>;
  let account = getContext<Context>('account');

  const onClick = () => {
    console.log('Favorite: ' + favorite);
    favorite = !favorite;
    toggle(favorite);
  };
</script>

<form method="POST" use:enhance action="/cars?/updateFavorite">
  <input name="userId" type="hidden" value={$account.id} />
  <input name="favorite" type="hidden" value={favorite} />
  <input name="carId" type="hidden" value={carId} />
  <button class="btn btn-circle" on:click={onClick} aria-label="お気に入り">
    {#if favorite}
      <Icon src={Star} size="24" class="text-yellow-500" />
    {:else}
      <Icon src={StarBorder} size="24" />
    {/if}
  </button>
</form>
