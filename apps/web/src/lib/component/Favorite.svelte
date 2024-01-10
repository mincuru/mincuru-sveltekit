<script lang="ts">
  import { Icon, Star } from 'svelte-hero-icons';
  export let favorite: boolean;
  export let toggle: (favorite: boolean) => void;

  const onClick = () => {
    favorite = !favorite;
    toggle(favorite);
  };
</script>

<button class="btn btn-circle" on:click={onClick} aria-label="お気に入り">
  {#if favorite}
    <Icon src={Star} size="24" solid class="text-yellow-500" />
  {:else}
    <Icon src={Star} size="24" />
  {/if}
</button>
