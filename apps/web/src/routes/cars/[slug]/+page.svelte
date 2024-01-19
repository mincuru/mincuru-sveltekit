<script lang="ts">
  import Favorite from '$lib/component/Favorite.svelte';
  import type { Account } from '$lib/model/Account';
  import { CarDisplay } from '$lib/model/CarDisplay';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { PageData } from './$types';
  export let data: PageData;
  type Context = Writable<Account>;
  let account = getContext<Context>('account');
  const toggleFavorite = (newFav: boolean) => {
    console.log('toggleFavorite', newFav);
    if (newFav) {
      $account.favorites.push(car.id);
    } else {
      $account.favorites = $account.favorites.filter((item) => item !== car.id);
    }
  };
  const car = new CarDisplay(data.car);
</script>

<div class="prose mx-auto">
  <div class="breadcrumbs text-sm">
    <ul>
      <li data-testid="bread-crumb-root"><a href="/cars">クルマ</a></li>
      <li data-testid="bread-crumb-second">{car.makerName}</li>
    </ul>
  </div>
  <div class="flex flex-row items-center px-6 md:px-0">
    <div class="flex-auto px-6">
      <h4 data-testid="maker-name-label">{car.makerName}</h4>
      <h2 data-testid="model-name-label">{car.modelName}</h2>
    </div>
    <div class="flex-none">
      <Favorite favorite={$account.favorites.includes(car.id)} toggle={toggleFavorite} />
    </div>
  </div>
  <div class="flex flex-col md:flex-row">
    <div class="flex-auto px-6">
      <table class="table">
        <tbody>
          <tr><th>車両本体(税込)</th><td data-testid="price-label">{car.priceLabel}円</td></tr>
          <tr><th>グレード</th><td data-testid="grade-name-label">{car.gradeName}</td></tr>
          <tr><th>型式</th><td data-testid="model-code-label">{car.modelCode}</td></tr>
          <tr><th>駆動方式</th><td data-testid="drive-system-label">{car.driveSystem}</td></tr>
          <tr
            ><th>パワートレイン</th><td data-testid="power-train-label">{car.powerTrainLabel}</td
            ></tr
          >
          <tr
            ><th><a data-testid="url" href={car.url} target="_blank">メーカーサイト</a></th><td
            ></td></tr
          >
        </tbody>
      </table>
    </div>
    <div class="w-auto px-6 md:px-0">
      <a data-testid="image-url" href={car.imageUrl} target="_blank">
        <img class="w-100% h-64 object-cover md:w-96" src={car.imageUrl} alt={car.modelName} />
      </a>
    </div>
  </div>
  <div role="tablist" class="tabs tabs-lifted px-6 md:px-0">
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      class="tab"
      aria-label="寸法・重量・定員"
      checked
    />
    <div
      role="tabpanel"
      class="tab-content rounded-box border-base-300 bg-base-100 divide-y divide-solid p-6"
    >
      <table class="table">
        <tbody>
          <tr>
            <th>全長x全幅x全高</th>
            <td data-testid="body-size-label"
              >{car.bodyLengthLabel}x{car.bodyWidthLabel}x{car.bodyHeightLabel}</td
            >
            <td>mm</td>
          </tr>
          <tr>
            <th>室内寸法(長さx幅x高さ)</th>
            <td data-testid="interior-size-label"
              >{car.interiorLengthLabel}x{car.interiorWidthLabel}x{car.interiorHeightLabel}</td
            >
            <td>mm</td>
          </tr>
          <tr>
            <th>ホイールベース</th>
            <td data-testid="wheel-base-label">{car.wheelBaseLabel}</td>
            <td>mm</td>
          </tr>
          <tr>
            <th>トレッド(前/後)</th>
            <td data-testid="tread-label">{car.treadFrontLabel}/{car.treadRearLabel}</td>
            <td>mm</td>
          </tr>
          <tr>
            <th>最低地上高</th>
            <td data-testid="road-clearance-label">{car.roadClearanceLabel}</td>
            <td>mm</td>
          </tr>
          <tr>
            <th>乗車定員</th>
            <td data-testid="riding-cap-label">{car.ridingCapLabel}</td>
            <td>名</td>
          </tr>
        </tbody>
      </table>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="走行装置" />
    <div role="tabpanel" class="tab-content rounded-box border-base-300 bg-base-100 p-6">
      <table class="table">
        <tbody>
          <tr>
            <th>ステアリング</th>
            <td data-testid="steering-label">{car.steeringLabel}</td>
          </tr>
          <tr>
            <th>サスペンション(前/後)</th>
            <td data-testid="suspension-label"
              >{car.suspensionFrontLabel} / {car.suspensionRearLabel}</td
            >
          </tr>
          <tr>
            <th>ブレーキ(前/後)</th>
            <td data-testid="break-label">{car.breakFrontLabel} / {car.breakRearLabel}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="エンジン" />
    <div role="tabpanel" class="tab-content rounded-box border-base-300 bg-base-100 p-6">
      <table class="table">
        <tbody>
          <tr>
            <th>型式</th>
            <td data-testid="engine-code-label">{car.engineCodeLabel}</td>
            <td></td>
          </tr>
          <tr>
            <th>種類</th>
            <td data-testid="engine-type-label">{car.engineTypeLabel}</td>
            <td></td>
          </tr>
          <tr>
            <th>総排気量</th>
            <td data-testid="engine-displacement-label">{car.engineDisplacementLabel}</td>
            <td>L</td>
          </tr>
          <tr>
            <th>ボアxストローク</th>
            <td data-testid="engine-bore-stroke-label"
              >{car.engineBoreLabel}x{car.engineStrokeLabel}</td
            >
            <td>mm</td>
          </tr>
          <tr>
            <th>圧縮比</th>
            <td data-testid="engine-compression-ratio-label">{car.engineCompressionRatioLabel}</td>
            <td></td>
          </tr>
          <tr>
            <th>最高出力 / 回転数</th>
            <td data-testid="engine-max-output-kw-label">
              {car.engineMaxOutputKwLabel} / {car.engineMaxOutputLowerRpmLabel}〜{car.engineMaxOutputHigherRpmLabel}
            </td>
            <td>kW(PS) / rpm</td>
          </tr>
          <tr>
            <th>最大トルク / 回転数</th>
            <td data-testid="engine-max-torque-nm-label">
              {car.engineMaxTorqueNmLabel} / {car.engineMaxTorqueLowerRpmLabel}〜{car.engineMaxTorqueHigherRpmLabel}
            </td>
            <td>Nm(kgf・m) / rpm</td>
          </tr>
          <tr>
            <th>燃料供給装置</th>
            <td data-testid="fuel-system-label">{car.fuelSystemLabel}</td>
            <td></td>
          </tr>
          <tr>
            <th>使用燃料</th>
            <td data-testid="fuel-type-label">{car.fuelTypeLabel}</td>
            <td></td>
          </tr>
          <tr>
            <th>タンク容量</th>
            <td data-testid="fuel-tank-cap-label">{car.fuelTankCapLabel}</td>
            <td>L</td>
          </tr>
        </tbody>
      </table>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="性能" />
    <div role="tabpanel" class="tab-content rounded-box border-base-300 bg-base-100 p-6">
      <table class="table">
        <tbody>
          <tr>
            <th>WLTCモード燃費</th>
            <td></td>
            <td data-testid="fcw-wltc-label">{car.fcrWltcLabel}</td>
            <td>km/L</td>
          </tr>
          <tr>
            <th></th>
            <td>市街地モード(WLTC-L)</td>
            <td data-testid="fcr-wltc-l-label">{car.fcrWltcLLabel}</td>
            <td>km/L</td>
          </tr>
          <tr>
            <th></th>
            <td>郊外モード(WLTC-M)</td>
            <td data-testid="fcr-wltc-m-label">{car.fcrWltcMLabel}</td>
            <td>km/L</td>
          </tr>
          <tr>
            <th></th>
            <td>高速道路モード(WLTC-H)</td>
            <td data-testid="fcr-wltc-h-label">{car.fcrWltcHLabel}</td>
            <td>km/L</td>
          </tr>
          <tr>
            <th>JC08モード燃費</th>
            <td></td>
            <td data-testid="fcr-jc08-label">{car.fcrJc08Label}</td>
            <td>km/L</td>
          </tr>
          <tr>
            <th>最小回転半径</th>
            <td></td>
            <td data-testid="min-turning-radius-label">{car.minTurningRadiusLabel}</td>
            <td>m</td>
          </tr>
          <tr>
            <th>主要燃費向上対策</th>
            <td></td>
            <td class="w-96" data-testid="fuel-efficiency">
              {#each car.fuelEfficiency as item}
                <div class="badge badge-primary badge-outline">{item}</div>
              {/each}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
