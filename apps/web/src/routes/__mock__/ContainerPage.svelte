<script lang="ts">
  import type { KVPair } from '$lib/__mock__/KVPair';
  import { setContext } from 'svelte';

  export let Component: any;
  export let KVPairs: KVPair[];

  KVPairs.forEach((kv) => {
    setContext(kv.key, kv.value);
  });
</script>

<svelte:component this={Component} />
