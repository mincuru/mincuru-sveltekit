<script lang="ts">
  import type { KVPair } from '$lib/__mock__/KVPair';
  import { setContext } from 'svelte';
  import type { PageData } from '../$types';

  export let Component: any;
  export let data: PageData;
  export let KVPairs: KVPair[];

  KVPairs.forEach((kv) => {
    setContext(kv.key, kv.value);
  });
</script>

<svelte:component this={Component} {data} />
