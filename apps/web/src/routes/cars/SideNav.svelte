<script lang="ts">
  import Accordion from '$lib/component/Accordion.svelte';
  import type { CarsFilter } from './CarsFilter';
  export let filter: CarsFilter;
  export let handleChangeFilter: () => void;
</script>

<Accordion title="メーカー名">
  <ul>
    {#each filter.makers as maker}
      <li>
        <div class="form-control">
          <label class="label cursor-pointer">
            <input
              type="checkbox"
              class="checkbox"
              bind:checked={maker.checked}
              on:change={handleChangeFilter}
            />
            <span class="label-text">{maker.title}</span>
          </label>
        </div>
      </li>
    {/each}
  </ul>
</Accordion>

<Accordion title="ボディタイプ">
  <ul>
    {#each filter.bodyTypes as bodyType}
      <li>
        <div class="form-control">
          <label class="label cursor-pointer">
            <input
              type="checkbox"
              class="checkbox"
              bind:checked={bodyType.checked}
              on:change={handleChangeFilter}
            />
            <span class="label-text">{bodyType.title}</span>
          </label>
        </div>
      </li>
    {/each}
  </ul>
</Accordion>

<Accordion title="パワートレーン">
  <ul>
    {#each filter.powerTrains as powerTrain}
      <li>
        <div class="form-control">
          <label class="label cursor-pointer">
            <input
              type="checkbox"
              class="checkbox"
              bind:checked={powerTrain.checked}
              on:change={handleChangeFilter}
            />
            <span class="label-text">{powerTrain.title}</span>
          </label>
        </div>
      </li>
    {/each}
  </ul>
</Accordion>

<Accordion title="駆動方式">
  <ul>
    {#each filter.driveSystems as driveSystem}
      <li>
        <div class="form-control">
          <label class="label cursor-pointer">
            <input
              type="checkbox"
              class="checkbox"
              bind:checked={driveSystem.checked}
              on:change={handleChangeFilter}
            />
            <span class="label-text">{driveSystem.title}</span>
          </label>
        </div>
      </li>
    {/each}
  </ul>
</Accordion>
