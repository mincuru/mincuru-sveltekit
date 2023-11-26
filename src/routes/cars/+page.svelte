<script lang="ts">
  import Checkbox from '$lib/component/Checkbox.svelte';
  import Accordion from '$lib/component/Accordion.svelte';
  import type { CarsFilter } from './cars-filter';

  // let checked = true;
  const onCheckboxClicked = function (value, checked) {
    console.log('parentFunc', filter.makers);
  };
  const toggleFunc = function (isOpen) {
    console.log('toggleFunc', isOpen);
  };

  // function onClicked(value, checked) {
  //   console.log(value, checked);
  // }
  let filter: CarsFilter = {
    makers: [
      { title: 'マツダ', value: 'マツダ', checked: false },
      { title: 'トヨタ', value: 'トヨタ', checked: false },
      { title: 'ホンダ', value: 'ホンダ', checked: false },
      { title: '日産', value: '日産', checked: true }
    ],
    bodyTypes: [
      { title: 'SUV', value: 'SUV', checked: false },
      { title: 'Sedan', value: 'SEDAN', checked: true },
      { title: 'ハッチバック', value: 'HATCHBACK', checked: false }
    ],
    powerTrains: [
      { title: 'エンジン', value: 'long-range', checked: false },
      { title: 'ストロングHV', value: 'performance', checked: false },
      { title: 'マイルドHV', value: 'performance', checked: true },
      { title: 'バッテリーEV', value: 'performance', checked: false },
      { title: 'シリーズHV', value: 'performance', checked: false }
    ],
    driveSystems: [
      { title: 'FF', value: 'FF', checked: false },
      { title: 'FR', value: 'FR', checked: true },
      { title: 'RR', value: 'RR', checked: false }
    ]
  };
</script>

<div class="flex flex-row">
  <!-- sidenav -->
  <div class="w-60">
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
  </div>

  <!-- main -->
  <div class="flex-auto bg-yellow-500">gggg</div>
</div>

<h1 class="text-3xl font-bold underline">Hello World</h1>
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>

<!-- <script>
    import App from './App.svelte';
    import Counter from './Counter.svelte';
    import welcome from '$lib/images/svelte-welcome.webp';
    import welcome_fallback from '$lib/images/svelte-welcome.png';
  </script>
  
  <svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
  </svelte:head>
  
  <section>
    <h1>
      <span class="welcome">
        <picture>
          <source srcset={welcome} type="image/webp" />
          <img src={welcome_fallback} alt="Welcome" />
        </picture>
      </span>
  
      to your new<br />SvelteKit app
    </h1>
  
    <h2>
      try editing <strong>src/routes/+page.svelte</strong>
    </h2>
  
    <Counter />
    <App />
  </section>
  
  <style>
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 0.6;
    }
  
    h1 {
      width: 100%;
    }
  
    .welcome {
      display: block;
      position: relative;
      width: 100%;
      height: 0;
      padding: 0 0 calc(100% * 495 / 2048) 0;
    }
  
    .welcome img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      display: block;
    }
  </style> -->

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
