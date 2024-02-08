import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import type { Car, PowerTrain } from '$lib/model/CarDisplay';
import ContainerPage from './__mock__/ContainerPage.svelte';
import Page from './+page.svelte';
import type { Account } from '$lib/model/Account';
import { writable } from 'svelte/store';

const carNormal: Car = {
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
  bodyType: 'SUV',
  bodyLength: 4747,
  bodyWidth: 1850,
  bodyHeight: 1690,
  wheelBase: 2700,
  treadFront: 1590,
  treadRear: 1590,
  roadClearance: 200,
  weight: 1550,
  interiorLength: 1890,
  interiorWidth: 1540,
  interiorHeight: 1265,
  ridingCap: 5,
  steering: 'ラック&ピニオン式',
  suspensionFront: 'ストラット式',
  suspensionRear: 'マルチリンク式',
  breakFront: 'ベンチレーテッドディスク',
  breakRear: 'ディスク',
  engineCode: 'PE-VPS',
  engineType: '水冷直列4気筒DOHC16バルブ',
  engineCylinderNum: 4,
  engineCylinderLayout: '直列',
  engineValveSystem: 'DOHC',
  engineDisplacement: 1.997,
  engineBore: 83.5,
  engineStroke: 91.2,
  engineCompressionRatio: 13.0,
  engineMaxOutputKw: 115,
  engineMaxOutputLowerRpm: 6000,
  engineMaxOutputHigherRpm: 4000,
  engineMaxTorqueNm: 213,
  engineMaxTorqueLowerRpm: 4000,
  engineMaxTorqueHigherRpm: 4000,
  fuelSystem: '筒内直接噴射(DI)',
  fuelType: 'REGULAR',
  fuelTankCap: 56,
  fcrWltc: 14.6,
  fcrWltcL: 11.2,
  fcrWltcM: 15.3,
  fcrWltcH: 16.2,
  fcrWltcExh: null,
  fcrJc08: 15.6,
  minTurningRadius: 5.5,
  ecrWltc: null,
  ecrWltcL: null,
  ecrWltcM: null,
  ecrWltcH: null,
  ecrWltcExh: null,
  ecrJc08: null,
  mpcJc08: null,
  mpcWltc: null,
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
};

// vi.mock('$app/navigation', () => ({
//   goto: vi.fn()
// }));

describe('+page.svelte', async () => {
  const account: Account = {
    id: 'xxxx-xxxx-xxxx-xxxx',
    name: 'test',
    email: '',
    favorites: [1, 2],
    image: ''
  };
  const mockAccount = writable<Account>(account);

  test('render with normal value', async () => {
    // Arrange
    const kvPairs = [{ key: 'account', value: mockAccount }];
    // Act
    const { getByTestId, getAllByTestId } = render(ContainerPage, {
      props: {
        Component: Page,
        data: { car: carNormal, account: account },
        KVPairs: kvPairs
      }
    });
    // Assert
    expect(getByTestId('bread-crumb-root').innerHTML).toBe('<a href="/cars">クルマ</a>');
    expect(getByTestId('bread-crumb-second').innerHTML).toBe('マツダ');
    expect(getByTestId('maker-name-label').innerHTML).toBe('マツダ');
    expect(getByTestId('model-name-label').innerHTML).toBe('CX-5');
    expect(getByTestId('price-label').innerHTML).toBe('3,200,000円');
    expect(getByTestId('grade-name-label').innerHTML).toBe('20S Smart Edition');
    expect(getByTestId('model-code-label').innerHTML).toBe('6BA-EKEP');
    expect(getByTestId('drive-system-label').innerHTML).toBe('AWD');
    expect(getByTestId('power-train-label').innerHTML).toBe('エンジン');
    expect(getByTestId('url').getAttribute('href')).toBe('https://www.mazda.co.jp/cars/cx-5/');
    expect(getByTestId('image-url').getAttribute('href')).toBe(
      'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg'
    );
    expect(getByTestId('body-size-label').innerHTML).toBe('4747x1850x1690');
    expect(getByTestId('interior-size-label').innerHTML).toBe('1890x1540x1265');
    expect(getByTestId('wheel-base-label').innerHTML).toBe('2700');
    expect(getByTestId('tread-label').innerHTML).toBe('1590/1590');
    expect(getByTestId('road-clearance-label').innerHTML).toBe('200');
    expect(getByTestId('riding-cap-label').innerHTML).toBe('5');
    expect(getByTestId('steering-label').innerHTML).toBe('ラック&amp;ピニオン式');
    expect(getByTestId('riding-cap-label').innerHTML).toBe('5');
    expect(getByTestId('suspension-label').innerHTML).toBe('ストラット式 / マルチリンク式');
    expect(getByTestId('break-label').innerHTML).toBe('ベンチレーテッドディスク / ディスク');
    expect(getByTestId('engine-code-label').innerHTML).toBe('PE-VPS');
    expect(getByTestId('engine-type-label').innerHTML).toBe('水冷直列4気筒DOHC16バルブ');
    expect(getByTestId('engine-displacement-label').innerHTML).toBe('1.997');
    expect(getByTestId('engine-bore-stroke-label').innerHTML).toBe('83.5x91.2');
    expect(getByTestId('engine-compression-ratio-label').innerHTML).toBe('13.0');
    expect(getByTestId('engine-max-output-kw-label').innerHTML).toBe('115 / 6000〜4000');
    expect(getByTestId('engine-max-torque-nm-label').innerHTML).toBe('213 / 4000〜4000');
    expect(getByTestId('fuel-system-label').innerHTML).toBe('筒内直接噴射(DI)');
    expect(getByTestId('fuel-type-label').innerHTML).toBe('無鉛レギュラーガソリン');
    expect(getByTestId('fuel-tank-cap-label').innerHTML).toBe('56');
    expect(getByTestId('fcw-wltc-label').innerHTML).toBe('14.6');
    expect(getByTestId('fcr-wltc-l-label').innerHTML).toBe('11.2');
    expect(getByTestId('fcr-wltc-m-label').innerHTML).toBe('15.3');
    expect(getByTestId('fcr-wltc-h-label').innerHTML).toBe('16.2');
    expect(getByTestId('fcr-jc08-label').innerHTML).toBe('15.6');
    expect(getByTestId('min-turning-radius-label').innerHTML).toBe('5.5');
    expect(getByTestId('fuel-efficiency').innerHTML).toBe(
      '<div class="badge badge-primary badge-outline">ミラーサイクルエンジン</div><div class="badge badge-primary badge-outline">アイドリングストップ機構</div><div class="badge badge-primary badge-outline">筒内直接噴射(DI)</div><div class="badge badge-primary badge-outline">可変バルブタイミング</div><div class="badge badge-primary badge-outline">気筒休止(PY-RPS型車)</div><div class="badge badge-primary badge-outline">充電制御</div><div class="badge badge-primary badge-outline">ロックアップ機構付トルクコンバーター</div><div class="badge badge-primary badge-outline">電動パワーステアリング</div>'
    );
  });
});

//     // Act
//     // Assert
//   });
// });
