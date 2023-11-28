<script lang="ts">
  import { Icon, Bars3 } from 'svelte-hero-icons';
  export let showSideNav;

  const onClicked = () => {
    showSideNav = !showSideNav;
  };
</script>

<div class="h-12 w-12 flex-none">
  <button
    class=" ml-2.5 mt-2.5 justify-center rounded-full bg-gray-100 p-2 hover:bg-slate-200 active:bg-slate-300"
    on:click={onClicked}
  >
    <Icon src={Bars3} size="24" />
  </button>
</div>
