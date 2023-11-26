<script lang="ts">
  import { Icon, ChevronUp, ChevronDown } from 'svelte-hero-icons';
  import { slide } from 'svelte/transition';
  export let title;
  let isOpen: boolean = true;
  const onClicked = () => {
    isOpen = !isOpen;
  };
</script>

<button
  type="button"
  on:click={onClicked}
  class="flex h-12 w-full items-center px-2 text-left hover:bg-slate-200 active:bg-slate-300"
>
  <span class="flex-auto align-middle">{title}</span>
  <Icon src={isOpen ? ChevronUp : ChevronDown} size="16" />
</button>
{#if isOpen}
  <div class="z-0 pl-2 {isOpen ? 'show' : 'hidden'}" in:slide out:slide>
    <slot />
  </div>
{/if}
<hr />
