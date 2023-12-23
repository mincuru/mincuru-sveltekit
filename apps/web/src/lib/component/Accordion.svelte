<script lang="ts">
  import { ChevronDown, ChevronUp, Icon } from 'svelte-hero-icons';
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
    <span class="flex-auto align-middle">{title}</span>
    <Icon src={isOpen ? ChevronUp : ChevronDown} size="16" />
  </button>
</div>
{#if isOpen}
  <div class="z-0 pl-2 {isOpen ? 'show' : 'hidden'}" in:slide out:slide>
    <slot />
  </div>
{/if}
<hr />
