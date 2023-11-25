<div class="flex flex-row">
  <!-- sidenav -->
  <div class="w-60">
    <h2>
      <span>メーカー名</span>
    </h2>
    <label class="table h-10 w-full hover:bg-slate-200 active:bg-slate-300">
      <input class="table-cell h-10 w-4 align-middle accent-red-600" type="checkbox" id="mazda" />
      <div class="table-cell w-full align-middle" for="mazda">マツダ</div>
    </label>
    <label class="table h-10 w-full hover:bg-slate-200 active:bg-slate-300">
      <input class="table-cell h-10 w-4 align-middle" type="checkbox" id="toyota" />
      <div class="table-cell w-full align-middle" for="toyota">トヨタ</div>
    </label>
    <label class="table h-10 w-full hover:bg-slate-200 active:bg-slate-300">
      <input class="table-cell h-10 w-4 align-middle" type="checkbox" id="nissan" />
      <div class="table-cell w-full align-middle" for="nissan">日産</div>
    </label>
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
