<script lang="ts">
  import { Close } from '@steeze-ui/material-design-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  export let title: string;
  export let value: string;
  export let removeTag: (value: string) => void;
</script>

<button
  class="btn btn-ghost flex w-fit cursor-pointer flex-row items-center gap-1 rounded-full border-2 border-gray-200 bg-gray-100 px-2 py-1"
  on:click={() => removeTag(value)}
  aria-label="button-label"
>
  <span>
    {title}
  </span>
  <Icon src={Close} size="16" />
</button>
