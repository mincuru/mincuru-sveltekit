<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div data-testid="test-label">うんこ {data.value}</div>
