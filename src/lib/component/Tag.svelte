<script lang="ts">
  import { Icon, XMark } from 'svelte-hero-icons';
  export let title: string;
  export let value: string;
</script>

<div
  class="flex w-fit cursor-pointer flex-row items-center gap-1 rounded-full border-2 border-gray-200 bg-gray-100 px-2 py-1 hover:bg-slate-200 active:bg-slate-300"
>
  <span class="">
    {title}
  </span>
  <Icon src={XMark} size="16" />
</div>
