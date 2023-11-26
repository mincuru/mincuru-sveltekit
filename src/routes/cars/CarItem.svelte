<script lang="ts">
  export let car: Car;
</script>

<div class="flex w-60 cursor-pointer flex-col shadow-md hover:bg-slate-200 active:bg-slate-300">
  <img class="h-40 w-full object-cover" src={car.imageUrl} alt={car.modelName} />
  <h2 class="mx-2 mt-2 text-lg">{car.modelName}</h2>
  <article class="m-2 text-sm text-gray-500">
    <p>{car.makerName}</p>
    <p>{car.price}円</p>
    <p class="line-clamp-2 w-60">
      全長:{car.body.length}mm, 全幅:{car.body.width}mm, 全高:{car.body.height}mm
    </p>
    <p>{car.powerTrain}, {car.driveSystem}, {car.fuelType}</p>
  </article>
</div>
