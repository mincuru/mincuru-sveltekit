<script lang="ts">
  import type { CarSummary } from '$lib/model/CarSummary';
  const car: CarSummary = {
    id: 1,
    modelName: 'CX-5',
    makerName: 'マツダ',
    url: 'https://www.mazda.co.jp/cars/cx-5/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
    price: 3200000,
    body: {
      // type: 'SUV',
      length: 4747,
      width: 1850,
      height: 1690
    },
    powerTrain: 'ICE',
    driveSystem: 'AWD',
    fuelType: 'REGULAR'
  };
</script>

<div class="prose mx-auto px-4">
  <div class="breadcrumbs text-sm">
    <ul>
      <li><a href="/">クルマ</a></li>
      <li>{car.makerName}</li>
    </ul>
  </div>
  <div class="flex flex-row">
    <div class="flex-1/2">
      <h3>{car.makerName}</h3>
      <h2>{car.modelName}</h2>
      <p>{car.price.toLocaleString()}円</p>
      <div role="tablist" class="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
          全長:{car.body.length.toLocaleString()}mm, 全幅:{car.body.width.toLocaleString()}mm, 全高:{car.body.height.toLocaleString()}mm
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2" checked />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Tab content 2
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Tab content 3
        </div>
      </div>
      <p></p>
    </div>
    <div class="flex-auto basis-0">
      <img src={car.imageUrl} alt={car.modelName} />
    </div>
  </div>
</div>
