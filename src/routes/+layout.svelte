<script>
  import '../app.css';
</script>

<!-- header -->
<div
  class="fixed left-0 right-0 top-0 flex h-16 place-items-center items-center bg-slate-400 p-4 font-sans drop-shadow-md"
>
  <h1 class="flex-auto text-2xl">みんクル</h1>
  <nav class="">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</div>

<!-- body -->
<article class="mt-16">
  <slot />
</article>

<!-- footer -->
<footer class="bg-slate-400">
  <p>
    <a href="">Privacy Policy</a>
    <a href="">Terms of Service</a>
  </p>
</footer>
