<script>
  import Checkbox from '$lib/component/Checkbox.svelte';
  // import { Checkbox } from 'flowbite-svelte';

  let checked = true;
  const parentFunc = function (value, checked) {
    console.log('parentFunc', value, checked);
    console.log(value, checked);
  };
  function onClicked(value, checked) {
    console.log(value, checked);
  }
</script>

<div class="flex flex-row">
  <!-- sidenav -->
  <div class="w-60">
    <h2>
      <span>メーカー名</span>
    </h2>
    <Checkbox spacing="mr-2" value="マツダ" {checked} onClicked={parentFunc}>マツダ</Checkbox>

    <Checkbox custom>
      <input class="h-5 w-5" type="checkbox" />
      <label>マツダ</label>
    </Checkbox>

    <div class="flex h-12 items-center hover:bg-slate-200 active:bg-slate-300" for="mazda">
      <input class="h-5 w-5 rounded text-pink-500" type="checkbox" id="mazda" />
      <label class="w-full" for="mazda">マツダ</label>
    </div>

    <div class="flex h-12 items-center hover:bg-slate-200 active:bg-slate-300">
      <input class="h-5 w-5 rounded text-pink-500" type="checkbox" id="toyota" />
      <label class="w-full" for="toyota">トヨタ</label>
    </div>

    <div class="flex h-12 items-center hover:bg-slate-200 active:bg-slate-300">
      <input class="h-5 w-5 rounded text-pink-500" type="checkbox" id="nissan" />
      <label class="w-full" for="nissan">日産</label>
    </div>
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
