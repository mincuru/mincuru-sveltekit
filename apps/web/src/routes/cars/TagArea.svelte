<script lang="ts">
  import Tag from '$lib/component/Tag.svelte';
  import type { CarsFilter } from './CarsFilter';
  export let filter: CarsFilter;
  export let handleChangeFilter: () => void;

  const removeMakerTag = (value: string) => {
    let localFilter = filter;
    const targetToUpdate = localFilter.makers.find((i) => i.value === value);
    if (targetToUpdate) {
      targetToUpdate.checked = false;
      filter = localFilter;
      handleChangeFilter();
    }
  };
  const removeBodyTypeTag = (value: string) => {
    let localFilter = filter;
    const targetToUpdate = localFilter.bodyTypes.find((i) => i.value === value);
    if (targetToUpdate) {
      targetToUpdate.checked = false;
      filter = localFilter;
      handleChangeFilter();
    }
  };
  const removePowerTrainTag = (value: string) => {
    let localFilter = filter;
    const targetToUpdate = localFilter.powerTrains.find((i) => i.value === value);
    if (targetToUpdate) {
      targetToUpdate.checked = false;
      filter = localFilter;
      handleChangeFilter();
    }
  };
  const removeDriveSystemTag = (value: string) => {
    let localFilter = filter;
    const targetToUpdate = localFilter.driveSystems.find((i) => i.value === value);
    if (targetToUpdate) {
      targetToUpdate.checked = false;
      filter = localFilter;
      handleChangeFilter();
    }
  };
</script>

<div class="join mx-2.5 mt-2.5 flex flex-row flex-wrap gap-2.5">
  {#each filter.makers.filter((item) => item.checked).map((item) => item) as item}
    <Tag title={item.title} value={item.value} removeTag={removeMakerTag} />
  {/each}
  {#each filter.bodyTypes.filter((item) => item.checked).map((item) => item) as item}
    <Tag title={item.title} value={item.value} removeTag={removeBodyTypeTag} />
  {/each}
  {#each filter.powerTrains.filter((item) => item.checked).map((item) => item) as item}
    <Tag title={item.title} value={item.value} removeTag={removePowerTrainTag} />
  {/each}
  {#each filter.driveSystems.filter((item) => item.checked).map((item) => item) as item}
    <Tag title={item.title} value={item.value} removeTag={removeDriveSystemTag} />
  {/each}
</div>
