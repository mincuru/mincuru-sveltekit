<script lang="ts">
  import { onMount } from 'svelte';
  export let title: string;
  export let value: string;
  export let checked: boolean;
  export let onClicked = null;

  let uniqueId: string;

  onMount(() => {
    uniqueId = generateUniqueId();
  });

  function generateUniqueId(): string {
    return Math.random().toString(36).substring(7);
  }
</script>

<div class="flex h-12 items-center pl-2 hover:bg-slate-200 active:bg-slate-300" for="mazda">
  <input
    class="h-5 w-5 rounded text-pink-500"
    type="checkbox"
    id={uniqueId}
    bind:checked
    on:click={onClicked}
  />
  <label class="ml-2 w-full" for={uniqueId}>{title}</label>
</div>
