<script lang="ts">
  import Checkbox from '$lib/component/Checkbox.svelte';
  import Accordion from '$lib/component/Accordion.svelte';
  import type { CarsFilter } from './cars-filter';
  export let filter: CarsFilter;
  export let onCheckboxClicked = null;
</script>

<Accordion title="メーカー名">
  <ul>
    {#each filter.makers as maker}
      <li>
        <Checkbox
          title={maker.title}
          value={maker.value}
          bind:checked={maker.checked}
          onClicked={onCheckboxClicked}
        />
      </li>
    {/each}
  </ul>
</Accordion>

<Accordion title="ボディタイプ">
  <ul>
    {#each filter.bodyTypes as bodyType}
      <li>
        <Checkbox
          title={bodyType.title}
          value={bodyType.value}
          bind:checked={bodyType.checked}
          onClicked={onCheckboxClicked}
        />
      </li>
    {/each}
  </ul>
</Accordion>

<Accordion title="パワートレーン">
  <ul>
    {#each filter.powerTrains as powerTrain}
      <li>
        <Checkbox
          title={powerTrain.title}
          value={powerTrain.value}
          bind:checked={powerTrain.checked}
          onClicked={onCheckboxClicked}
        />
      </li>
    {/each}
  </ul>
</Accordion>

<Accordion title="駆動方式">
  <ul>
    {#each filter.driveSystems as driveSystem}
      <li>
        <Checkbox
          title={driveSystem.title}
          value={driveSystem.value}
          bind:checked={driveSystem.checked}
          onClicked={onCheckboxClicked}
        />
      </li>
    {/each}
  </ul>
</Accordion>
