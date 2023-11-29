<script lang="ts">
  import Tag from '$lib/component/Tag.svelte';
  export let filter: CarsFilter;
</script>

<div class="mx-2.5 mt-2.5 flex flex-row flex-wrap gap-2.5">
  {#each filter.makers.filter((item) => item.checked).map((item) => item) as item}
    <Tag title={item.title} value={item.value} />
  {/each}
  {#each filter.bodyTypes.filter((item) => item.checked).map((item) => item) as item}
    <Tag title={item.title} value={item.value} />
  {/each}
  {#each filter.powerTrains.filter((item) => item.checked).map((item) => item) as item}
    <Tag title={item.title} value={item.value} />
  {/each}
  {#each filter.driveSystems.filter((item) => item.checked).map((item) => item) as item}
    <Tag title={item.title} value={item.value} />
  {/each}
</div>
