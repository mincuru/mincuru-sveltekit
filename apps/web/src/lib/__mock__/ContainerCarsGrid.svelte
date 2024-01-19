<script lang="ts">
  import { setContext } from 'svelte';
  import type { KVPair } from './KVPair';

  export let Component: any;
  export let KVPairs: KVPair[];

  KVPairs.forEach((kv) => {
    setContext(kv.key, kv.value);
  });
</script>

<svelte:component this={Component} />
