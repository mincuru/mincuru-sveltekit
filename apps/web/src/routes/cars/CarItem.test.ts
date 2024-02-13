import { render, fireEvent } from '@testing-library/svelte';
import CarItem from './CarItem.svelte';
import { CarDisplay } from '$lib/model/CarDisplay';
import ContainerCarItem from './__mock__/ContainerCarItem.svelte';
import type { Account } from '$lib/model/Account';
import { writable } from 'svelte/store';

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
    engineDisplacement: 1997,
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
  });

  const carNull = new CarDisplay({
    id: 7,
    modelName: 'スタンダードカート',
    modelCode: 'STANDARD-CART',
    gradeName: 'SWITCH',
    makerName: 'NTD',
    powerTrain: 'ICE',
    driveSystem: 'AWD',
    url: null,
    imageUrl: null,
    price: null,
    bodyType: 'COUPE',
    bodyLength: null,
    bodyWidth: null,
    bodyHeight: null,
    wheelBase: null,
    treadFront: null,
    treadRear: null,
    roadClearance: null,
    weight: null,
    interiorLength: null,
    interiorWidth: null,
    interiorHeight: null,
    ridingCap: null,
    steering: null,
    suspensionFront: null,
    suspensionRear: null,
    breakFront: null,
    breakRear: null,
    engineCode: null,
    engineType: null,
    engineCylinderNum: null,
    engineCylinderLayout: null,
    engineValveSystem: null,
    engineDisplacement: null,
    engineBore: null,
    engineStroke: null,
    engineCompressionRatio: null,
    engineMaxOutputKw: null,
    engineMaxOutputLowerRpm: null,
    engineMaxOutputHigherRpm: null,
    engineMaxTorqueNm: null,
    engineMaxTorqueLowerRpm: null,
    engineMaxTorqueHigherRpm: null,
    fuelSystem: null,
    fuelType: null,
    fuelTankCap: null,
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
  });

  const account: Account = {
    id: 'xxxx-xxxx-xxxx-xxxx',
    name: 'test',
    email: '',
    favorites: [1, 2],
    image: ''
  };
  const mockAccount = writable<Account>(account);
  const contextValues = [{ key: 'account', value: mockAccount }];

  vi.mock('$lib/component/__mock__/Favorite.svelte', () => {
    return {
      default: vi.fn().mockImplementation(({ favorite, toggle }) => {
        return {
          // Mock コンポーネントの内容
          render: () =>
            `<button data-testid="mock-favorite" class="${favorite ? 'favorited' : ''}" onclick="${() => toggle(!favorite)}">Mock Favorite</button>`
        };
      })
    };
  });

  test('render with normal value', async () => {
    // Arrange
    // Act
    const { getByTestId } = render(ContainerCarItem, {
      props: {
        Component: CarItem,
        car: carNormal,
        favorite: true,
        updateFavorite: vi.fn(),
        ContextValues: contextValues
      }
    });
    // Assert
    expect(getByTestId('item-page-link').getAttribute('href')).toBe('/cars/1');
    expect(getByTestId('image').getAttribute('src')).toBe(
      'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg'
    );
    expect(getByTestId('image').getAttribute('alt')).toBe('CX-5');
    expect(getByTestId('title').textContent).toEqual('CX-5');
    expect(getByTestId('maker-name').textContent).toEqual('マツダ');
    expect(getByTestId('price').textContent).toEqual('3,200,000円');
    expect(getByTestId('body-size').textContent).toEqual('全長:4747mm 幅:1850mm 高さ:1690mm');
    expect(getByTestId('other-text').textContent).toEqual(
      'SUV エンジン AWD 無鉛レギュラーガソリン'
    );
  });

  test('render with null value', async () => {
    // Arrange
    // Act
    const { getByTestId } = render(ContainerCarItem, {
      props: {
        Component: CarItem,
        car: carNull,
        favorite: true,
        updateFavorite: vi.fn(),
        ContextValues: contextValues
      }
    });
    // Assert
    expect(getByTestId('item-page-link').getAttribute('href')).toBe('/cars/7');
    expect(getByTestId('image').getAttribute('src')).toBe(null);
    expect(getByTestId('image').getAttribute('alt')).toBe('スタンダードカート');
    expect(getByTestId('title').textContent).toEqual('スタンダードカート');
    expect(getByTestId('maker-name').textContent).toEqual('NTD');
    expect(getByTestId('price').textContent).toEqual('N/A円');
    expect(getByTestId('body-size').textContent).toEqual('全長:N/Amm 幅:N/Amm 高さ:N/Amm');
    expect(getByTestId('other-text').textContent).toEqual('クーペ エンジン AWD N/A');
  });

  test('click favorite from true', async () => {
    // Arrange
    const updateFavoriteMock = vi.fn();
    const { getByLabelText } = render(ContainerCarItem, {
      props: {
        Component: CarItem,
        car: carNull,
        favorite: true,
        updateFavorite: updateFavoriteMock,
        ContextValues: contextValues
      }
    });
    const button1 = getByLabelText('お気に入り');
    // Act
    await fireEvent.click(button1);
    // Assert
    expect(updateFavoriteMock).toHaveBeenCalledTimes(1);
    expect(updateFavoriteMock).toHaveBeenCalledWith(7, false);
  });

  test('click favorite from false', async () => {
    // Arrange
    const updateFavoriteMock = vi.fn();
    const { getByLabelText } = render(ContainerCarItem, {
      props: {
        Component: CarItem,
        car: carNull,
        favorite: false,
        updateFavorite: updateFavoriteMock,
        ContextValues: contextValues
      }
    });
    const button1 = getByLabelText('お気に入り');
    // Act
    await fireEvent.click(button1);
    // Assert
    expect(updateFavoriteMock).toHaveBeenCalledTimes(1);
    expect(updateFavoriteMock).toHaveBeenCalledWith(7, true);
  });
});
