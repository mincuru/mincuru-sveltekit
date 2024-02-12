<script lang="ts">
  // テスト用に必要なpropsをexportします
  export let carId: number;
  // @ts-ignore
  export let favorite: boolean;
  // @ts-ignore
  export let toggle: (favorite: boolean) => void;
</script>
