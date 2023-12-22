<script>
  import Nested from './Nested.svelte';
  let name = 'Svelte';
</script>

<h1>Hello {name.toUpperCase()}!</h1>
<img
  src="https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg"
  alt="{name} dances."
/>
<Nested />

<style>
  p {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>
