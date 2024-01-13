import { render, fireEvent } from '@testing-library/svelte';
import CarItem from './CarItem.svelte';
import { CarDisplay } from '$lib/model/CarDisplay';

describe('CarItem.svelte', async () => {
  const carNormal = new CarDisplay({
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
        rear: 1590
      },
      roadClearance: 200,
      weight: 1550
    },
    interior: {
      length: 1890,
      width: 1540,
      height: 1265,
      ridingCap: 5
    },
    steering: 'ラック&ピニオン式',
    suspension: {
      front: 'ストラット式',
      rear: 'マルチリンク式'
    },
    break: {
      front: 'ベンチレーテッドディスク',
      rear: 'ディスク'
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
      fuelTankCap: 56
    },
    performance: {
      minTurningRadius: 5.5,
      fcrWltc: 14.6,
      fcrWltcL: 11.2,
      fcrWltcM: 15.3,
      fcrWltcH: 16.2,
      fcrWltcExh: 13.6,
      fcrJc08: 15.6,
      mpcWltc: 14.6,
      ecrWltc: null,
      ecrWltcL: null,
      ecrWltcM: null,
      ecrWltcH: null,
      ecrWltcExh: null,
      ecrJc08: null,
      mpcJc08: null,
      fuelEfficiency: [
        'ミラーサイクルエンジン',
        'アイドリングストップ機構',
        '筒内直接噴射(DI)',
        '可変バルブタイミング',
        '気筒休止(PY-RPS型車)',
        '充電制御',
        'ロックアップ機構付トルクコンバーター',
        '電動パワーステアリング'
      ]
    }
  });

  const carNull = new CarDisplay({
    id: 1,
    modelName: 'CX-5',
    modelCode: '6BA-EKEP',
    gradeName: '20S Smart Edition',
    makerName: 'マツダ',
    powerTrain: 'ICE',
    driveSystem: 'AWD',
    url: null,
    imageUrl: null,
    price: null,
    body: {
      type: 'SUV',
      length: null,
      width: null,
      height: null,
      wheelBase: null,
      tread: {
        front: null,
        rear: null
      },
      roadClearance: null,
      weight: null
    },
    interior: {
      length: null,
      width: null,
      height: null,
      ridingCap: null
    },
    steering: null,
    suspension: {
      front: null,
      rear: null
    },
    break: {
      front: null,
      rear: null
    },
    engine: {
      code: null,
      type: null,
      cylinderNum: null,
      cylinderLayout: null,
      valveSystem: null,
      displacement: null,
      bore: null,
      stroke: null,
      compressionRatio: null,
      maxOutputKw: null,
      maxOutputLowerRpm: null,
      maxOutputHigherRpm: null,
      maxTorqueNm: null,
      maxTorqueLowerRpm: null,
      maxTorqueHigherRpm: null,
      fuelSystem: null,
      fuelType: null,
      fuelTankCap: null
    },
    performance: {
      minTurningRadius: null,
      fcrWltc: null,
      fcrWltcL: null,
      fcrWltcM: null,
      fcrWltcH: null,
      fcrWltcExh: null,
      fcrJc08: null,
      mpcWltc: null,
      ecrWltc: null,
      ecrWltcL: null,
      ecrWltcM: null,
      ecrWltcH: null,
      ecrWltcExh: null,
      ecrJc08: null,
      mpcJc08: null,
      fuelEfficiency: []
    }
  });

  test('render with normal value', async () => {
    const updateFavorite = (id: number, favorite: boolean) => {};
    const { getByTestId } = render(CarItem, {
      car: carNormal,
      favorite: true,
      updateFavorite: updateFavorite
    });
    expect(getByTestId('item-page-link')).not.NaN;
    expect(getByTestId('title').textContent).toEqual('CX-5');
    expect(getByTestId('maker-name').textContent).toEqual('マツダ');
    expect(getByTestId('price').textContent).toEqual('3,200,000円');
    expect(getByTestId('body-size').textContent).toEqual('全長:4747mm 幅:1850mm 高さ:1690mm');
    expect(getByTestId('other-text').textContent).toEqual(
      'SUV エンジン AWD 無鉛レギュラーガソリン'
    );
  });

  test('render with null value', async () => {
    const updateFavorite = (id: number, favorite: boolean) => {};
    const { getByTestId } = render(CarItem, {
      car: carNull,
      favorite: true,
      updateFavorite: updateFavorite
    });
    expect(getByTestId('item-page-link')).not.NaN;
    expect(getByTestId('title').textContent).toEqual('CX-5');
    expect(getByTestId('maker-name').textContent).toEqual('マツダ');
    expect(getByTestId('price').textContent).toEqual('N/A円');
    expect(getByTestId('body-size').textContent).toEqual('全長:N/Amm 幅:N/Amm 高さ:N/Amm');
    expect(getByTestId('other-text').textContent).toEqual('SUV エンジン AWD N/A');
  });
});
