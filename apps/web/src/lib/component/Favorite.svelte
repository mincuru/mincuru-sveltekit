<script lang="ts">
  import { Star, StarBorder } from '@steeze-ui/material-design-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  export let favorite: boolean;
  export let toggle: (favorite: boolean) => void;

  const onClick = () => {
    favorite = !favorite;
    toggle(favorite);
  };
</script>

<button class="btn btn-circle" on:click={onClick} aria-label="お気に入り">
  {#if favorite}
    <Icon src={Star} size="24" class="text-yellow-500" />
  {:else}
    <Icon src={StarBorder} size="24" />
  {/if}
</button>
