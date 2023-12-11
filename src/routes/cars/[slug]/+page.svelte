<script lang="ts">
  import type { PageData } from './$types';
  import { CarDisplay } from '$lib/model/CarDisplay';
  import Favorite from '$lib/component/Favorite.svelte';
  export let data: PageData;
  let favorite: boolean;
  const toggleFavorite = (newFav: boolean) => { /*updateFavorite(car.data.id, newFav)*/ };
  const car: CarDisplay = new CarDisplay(data.car);
</script>

<div class="prose mx-auto">
  <div class="breadcrumbs text-sm">
    <ul>
      <li><a href="/">クルマ</a></li>
      <li>{car.data.makerName}</li>
    </ul>
  </div>
  <div class="flex flex-row items-center px-6 md:px-0">
    <div class="px-6 flex-auto">
      <h4>{car.data.makerName}</h4>
      <h2>{car.data.modelName}</h2>
    </div>
    <div class="flex-none"><Favorite bind:favorite toggle={toggleFavorite} /></div>
  </div>
  <div class="flex md:flex-row flex-col">
    <div class="flex-auto px-6">
      <table class="table">
        <tbody>
          <tr><th>車両本体(税込)</th><td>{car.data.price?.toLocaleString()}円</td></tr>
          <tr><th>グレード</th><td>{car.data.gradeName}</td></tr>
          <tr><th>型式</th><td>{car.data.modelCode}</td></tr>
          <tr><th>駆動方式</th><td>{car.data.driveSystem}</td></tr>
          <tr><th>パワートレイン</th><td>{car.powerTrainLabel}</td></tr>
          <tr><th><a href="{car.data.url}" target="_blank">メーカーサイト</a></th><td></td></tr>
        </tbody>
      </table>

    </div>
    <div class="w-auto px-6 md:px-0">
      <img class="h-64 object-cover" src={car.data.imageUrl} alt={car.data.modelName} />
    </div>
  </div>
  <div role="tablist" class="tabs tabs-lifted px-6 md:px-0">
    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="寸法・重量・定員" checked />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 divide-y divide-solid">
      {#if car.data.body}
        <table class="table">
          <tbody>
            <tr><th>全長x全幅x全高</th><td>{car.data.body.length?.toLocaleString() ?? 'N/A'}x{car.data.body.width?.toLocaleString() ?? 'N/A'}x{car.data.body.height?.toLocaleString() ?? 'N/A'}</td><td>mm</td></tr>
            <tr><th>室内寸法(長さx幅x高さ)</th><td>{car.data.interior?.length?.toLocaleString() ?? 'N/A'}x{car.data.interior?.width?.toLocaleString() ?? 'N/A'}x{car.data.interior?.height?.toLocaleString() ?? 'N/A'}</td><td>mm</td></tr>
            <tr><th>ホイールベース</th><td>{car.data.body.wheelBase?.toLocaleString() ?? 'N/A'}</td><td>mm</td></tr>
            <tr><th>トレッド(前/後)</th><td>{car.data.body.tread?.front?.toLocaleString() ?? 'N/A'}/{car.data.body.tread?.rear?.toLocaleString() ?? 'N/A'}</td><td>mm</td></tr>
            <tr><th>最低地上高</th><td>{car.data.body.roadClearance?.toLocaleString() ?? 'N/A'}</td><td>mm</td></tr>
            <tr><th>乗車定員</th><td>{car.data.interior?.ridingCap}</td><td>名</td></tr>
          </tbody>
        </table>
      {/if}
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="走行装置" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <table class="table">
        <tbody>
          <tr><th>ステアリング</th><td>{car.data.steering}</td></tr>
          <tr><th>サスペンション(前/後)</th><td>{car.data.suspension?.front ?? 'N/A'} / {car.data.suspension?.rear ?? 'N/A'}</td></tr>
          <tr><th>ブレーキ(前/後)</th><td>{car.data.break?.front ?? 'N/A'} / {car.data.break?.rear ?? 'N/A'}</td></tr>
        </tbody>
      </table>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="エンジン" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <table class="table">
        <tbody>
          <tr><th>型式</th><td>{car.data.engine?.code ?? 'N/A'}</td><td></td></tr>
          <tr><th>種類</th><td>{car.data.engine?.type ?? 'N/A'}</td><td></td></tr>
          <tr><th>総排気量</th><td>{car.data.engine?.displacement ?? 'N/A'}</td><td>L</td></tr>
          <tr><th>ボアxストローク</th><td>{car.data.engine?.bore ?? 'N/A'}x{car.data.engine?.stroke ?? 'N/A'}</td><td>mm</td></tr>
          <tr><th>圧縮比</th><td>{car.data.engine?.compressionRatio ?? 'N/A'}</td><td></td></tr>
          <tr><th>最高出力 / 回転数</th><td>{car.data.engine?.maxOutputKw?.toLocaleString() ?? 'N/A'} / {car.data.engine?.maxOutputLowerRpm?.toLocaleString() ?? 'N/A'}〜{car.data.engine?.maxOutputHigherRpm?.toLocaleString() ?? 'N/A'}</td><td>kW(PS) / rpm</td></tr>
          <tr><th>最大トルク / 回転数</th><td>{car.data.engine?.maxTorqueNm?.toLocaleString() ?? 'N/A'} / {car.data.engine?.maxTorqueLowerRpm?.toLocaleString() ?? 'N/A'}〜{car.data.engine?.maxTorqueHigherRpm?.toLocaleString() ?? 'N/A'}</td><td>Nm(kgf・m) / rpm</td></tr>
          <tr><th>燃料供給装置</th><td>{car.data.engine?.fuelSystem ?? 'N/A'}</td><td></td></tr>
          <tr><th>使用燃料</th><td>{car.fuelTypeLabel ?? 'N/A'}</td><td></td></tr>
          <tr><th>タンク容量</th><td>{car.data.engine?.fuelTankCap ?? 'N/A'}</td><td>L</td></tr>
        </tbody>
      </table>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="性能" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <table class="table">
        <tbody>
          <tr><th>WLTCモード燃費</th><td></td><td>{car.data.performance?.fcrWltc ?? 'N/A'}</td><td>km/L</td></tr>
          <tr><th></th><td>市街地モード(WLTC-L)</td><td>{car.data.performance?.fcrWltcL ?? 'N/A'}</td><td>km/L</td></tr>
          <tr><th></th><td>郊外モード(WLTC-M)</td><td>{car.data.performance?.fcrWltcM ?? 'N/A'}</td><td>km/L</td></tr>
          <tr><th></th><td>高速道路モード(WLTC-H)</td><td>{car.data.performance?.fcrWltcH ?? 'N/A'}</td><td>km/L</td></tr>
          <tr><th>JC08モード燃費</th><td></td><td>{car.data.performance?.fcrJc08 ?? 'N/A'}</td><td>km/L</td></tr>
          <tr><th>最小回転半径</th><td></td><td>{car.data.performance?.minTurningRadius ?? 'N/A'}</td><td>m</td></tr>
          <tr><th>主要燃費向上対策</th><td></td><td class="w-96">
            {#each car.data.performance?.fuelEfficiency ?? [] as hoge}
              <div class="badge badge-outline badge-primary">{hoge}</div>
            {/each}
          </td><td></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
