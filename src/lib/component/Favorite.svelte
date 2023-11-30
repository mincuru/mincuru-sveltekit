<script lang="ts">
  import { Icon, Star } from 'svelte-hero-icons';
  export let favorite: boolean;
  export let toggle;

  function onClick() {
    favorite = !favorite;
    toggle(favorite);
  }
</script>

<button class="btn btn-circle" on:click={onClick}>
  {#if favorite}
    <Icon src={Star} size="24" solid />
  {:else}
    <Icon src={Star} size="24" />
  {/if}
</button>
