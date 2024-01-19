<script lang="ts">
  import type { Account } from '$lib/model/Account';
  import { setContext } from 'svelte';
  import type { PageData } from '../../routes/cars/[slug]/$types';
  import type { KVPair } from './KVPair';
  // import { PageData } from '../../routes/cars/$types';
  // import { PageData } from '../../routes/$types';

  export let Component: any;
  export let data: PageData;
  export let KVPairs: KVPair[];

  KVPairs.forEach((kv) => {
    setContext(kv.key, kv.value);
  });
</script>

<svelte:component this={Component} {data} />
