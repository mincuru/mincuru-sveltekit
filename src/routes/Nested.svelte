<script>
  let string = `this string contains some <strong>HTML!</strong>`;
  let count = 0;
  $: doubled = count * 2;
  $: {
    console.log(`the count is ${count}`);
    console.log(`this will also be logged whenever count changes.`);
  }
  $: if (count >= 10) {
    alert('count is angerously high!');
    count = 0;
  }
  function increment() {
    count += 1;
  }
</script>

<p>{@html string}</p>
<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
  {doubled}
</button>
