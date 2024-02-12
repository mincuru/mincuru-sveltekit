<script lang="ts">
  import type { ContextValues } from '$lib/__mock__/ContextValues';
  import { setContext } from 'svelte';

  export let Component: any;
  export let car: any;
  export let favorite: any;
  export let updateFavorite: any;
  export let ContextValues: ContextValues[];

  ContextValues.forEach((kv) => {
    setContext(kv.key, kv.value);
  });
</script>

<svelte:component this={Component} {car} {favorite} {updateFavorite} />
