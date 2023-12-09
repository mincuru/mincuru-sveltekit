<script lang="ts">
  // import type { CarSummary } from '$lib/model/CarSummary';
  import { CarDisplay } from '$lib/model/CarDisplay';
  
  const car: CarDisplay = new CarDisplay({
    id: 1,
    modelName: 'CX-5',
    modelCode: '6BA-EKEP',
    gradeName: '20S Smart Edition',
    makerName: 'マツダ',
    powerTrain: 'ICE',
    driveSystem: 'AWD',
    url: 'https://www.mazda.co.jp/cars/cx-5/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
    price: 3200000,
    body: {
      type: 'SUV',
      length: 4747,
      width: 1850,
      height: 1690,
      wheelBase: 2700,
      tread: {
        front: 1590,
        rear: 1590,
      },
      roadClearance: 200,
      weight: 1550,
    },
    interior: {
      length: 1890,
      width: 1540,
      height: 1265,
      ridingCap: 5,
    },
    steering: 'ラック&ピニオン式',
    suspension: {
      front: 'ストラット式',
      rear: 'マルチリンク式',
    },
    break: {
      front: 'ベンチレーテッドディスク',
      rear: 'ディスク',
    },
    engine: {
      code: 'PE-VPS',
      type: '水冷直列4気筒DOHC16バルブ',
      cylinderNum: 4,
      cylinderLayout: '直列',
      valveSystem: 'DOHC',
      displacement: 1997,
      bore: 83.5,
      stroke: 91.2,
      compressionRatio: 13.0,
      maxOutputKw: 115,
      maxOutputLowerRpm: 6000,
      maxOutputHigherRpm: 4000,
      maxTorqueNm: 213,
      maxTorqueLowerRpm: 4000,
      maxTorqueHigherRpm: 4000,
      fuelSystem: '筒内直接噴射(DI)',
      fuelType: 'REGULAR',
      fuelTankCap: 56,
    },
    performance: {
      fcrWltc: 14.6,
      fcrWltcL: 11.2,
      fcrWltcM: 15.3,
      fcrWltcH: 16.2,
      fcrJc08: 15.6,
      minTurningRadius: 5.5,
      fuelEfficiency: ['ミラーサイクルエンジン', 'アイドリングストップ機構', '筒内直接噴射(DI)', '可変バルブタイミング', '気筒休止(PY-RPS型車)', '充電制御', 'ロックアップ機構付トルクコンバーター', '電動パワーステアリング'],
    },
  },
  );
</script>

<div class="prose mx-auto">
  <div class="breadcrumbs text-sm">
    <ul>
      <li><a href="/">クルマ</a></li>
      <li>{car.data.makerName}</li>
    </ul>
  </div>
  <div class="px-6">
    <h4>{car.data.makerName}</h4>
    <h2>{car.data.modelName}</h2>
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
            <tr><th>室内寸法(長さx幅x高さ)</th><td>{car.data.interior.length?.toLocaleString()}x{car.data.interior.width?.toLocaleString()}x{car.data.interior.height?.toLocaleString()}</td><td>mm</td></tr>
            <tr><th>ホイールベース</th><td>{car.data.body.wheelBase?.toLocaleString()}</td><td>mm</td></tr>
            <tr><th>トレッド(前/後)</th><td>{car.data.body.tread.front?.toLocaleString()}/{car.data.body.tread.rear?.toLocaleString()}</td><td>mm</td></tr>
            <tr><th>最低地上高</th><td>{car.data.body.roadClearance?.toLocaleString()}</td><td>mm</td></tr>
            <tr><th>乗車定員</th><td>{car.data.interior.ridingCap}</td><td>名</td></tr>
          </tbody>
        </table>
      {/if}
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="走行装置" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <table class="table">
        <tbody>
          <tr><th>ステアリング</th><td>{car.data.steering}</td></tr>
          <tr><th>サスペンション(前/後)</th><td>{car.data.suspension.front} / {car.data.suspension.rear}</td></tr>
          <tr><th>ブレーキ(前/後)</th><td>{car.data.break.front} / {car.data.break.rear}</td></tr>
        </tbody>
      </table>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="エンジン" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <table class="table">
        <tbody>
          <tr><th>型式</th><td>{car.data.engine?.code}</td><td></td></tr>
          <tr><th>種類</th><td>{car.data.engine?.type}</td><td></td></tr>
          <tr><th>総排気量</th><td>{car.data.engine?.displacement}</td><td>L</td></tr>
          <tr><th>ボアxストローク</th><td>{car.data.engine?.bore}x{car.data.engine?.stroke}</td><td>mm</td></tr>
          <tr><th>圧縮比</th><td>{car.data.engine?.compressionRatio}</td><td></td></tr>
          <tr><th>最高出力 / 回転数</th><td>{car.data.engine?.maxOutputKw.toLocaleString()} / {car.data.engine?.maxOutputLowerRpm.toLocaleString()}〜{car.data.engine?.maxOutputHigherRpm.toLocaleString()}</td><td>kW(PS) / rpm</td></tr>
          <tr><th>最大トルク / 回転数</th><td>{car.data.engine?.maxTorqueNm.toLocaleString()} / {car.data.engine?.maxTorqueLowerRpm.toLocaleString()}〜{car.data.engine?.maxTorqueHigherRpm.toLocaleString()}</td><td>Nm(kgf・m) / rpm</td></tr>
          <tr><th>燃料供給装置</th><td>{car.data.engine?.fuelSystem}</td><td></td></tr>
          <tr><th>使用燃料</th><td>{car.fuelTypeLabel}</td><td></td></tr>
          <tr><th>タンク容量</th><td>{car.data.engine?.fuelTankCap}</td><td>L</td></tr>
        </tbody>
      </table>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="性能" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <table class="table">
        <tbody>
          <tr><th>WLTCモード燃費</th><td></td><td>{car.data.performance?.fcrWltc}</td><td>km/L</td></tr>
          <tr><th></th><td>市街地モード(WLTC-L)</td><td>{car.data.performance?.fcrWltcL}</td><td>km/L</td></tr>
          <tr><th></th><td>郊外モード(WLTC-M)</td><td>{car.data.performance?.fcrWltcM}</td><td>km/L</td></tr>
          <tr><th></th><td>高速道路モード(WLTC-H)</td><td>{car.data.performance?.fcrWltcH}</td><td>km/L</td></tr>
          <tr><th>JC08モード燃費</th><td></td><td>{car.data.performance?.fcrJc08}</td><td>km/L</td></tr>
          <tr><th>最小回転半径</th><td></td><td>{car.data.performance?.minTurningRadius}</td><td>m</td></tr>
          <tr><th>主要燃費向上対策</th><td></td><td class="w-96">
            {#each car.data.performance?.fuelEfficiency ?? [] as hoge}
              <div class="badge badge-outline badge-primary">{hoge}</div>
            {/each}
          </td><td></td></tr>
        </tbody>
      </table>
    </div>

    <!-- <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="トランスミッション" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      Tab content 3
    </div> -->
  </div>

</div>
