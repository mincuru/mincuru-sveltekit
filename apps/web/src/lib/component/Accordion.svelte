<script lang="ts">
  import { ExpandLess, ExpandMore } from '@steeze-ui/material-design-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { slide } from 'svelte/transition';
  export let title: string;
  let isOpen: boolean = true;
  const onClicked = () => {
    isOpen = !isOpen;
  };
</script>

<div class="form-control">
  <button
    on:click={onClicked}
    class="btn btn-ghost flex h-12 w-full items-center rounded-lg px-2 text-left"
  >
    <span class="flex-auto align-middle" aria-label="toggle-button-label">{title}</span>
    <Icon src={isOpen ? ExpandLess : ExpandMore} size="16" />
  </button>
</div>
<div aria-label="slot-container">
  {#if isOpen}
    <div class="z-0 pl-2 {isOpen ? 'show' : 'hidden'}" in:slide out:slide>
      <slot />
    </div>
  {/if}
</div>
<hr />
