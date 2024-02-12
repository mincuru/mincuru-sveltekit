<script lang="ts">
  import type { ContextValues } from '$lib/__mock__/ContextValues';
  import { setContext } from 'svelte';
  import type { PageData } from '../$types';

  export let Component: any;
  export let data: PageData;
  export let ContextValues: ContextValues[];

  ContextValues.forEach((kv) => {
    setContext(kv.key, kv.value);
  });
</script>

<svelte:component this={Component} {data} />
