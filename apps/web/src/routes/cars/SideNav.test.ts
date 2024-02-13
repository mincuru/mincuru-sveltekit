// https://svelte-recipes.netlify.app/testing/
import { render } from '@testing-library/svelte';
import { writable } from 'svelte/store';
import type { CarsFilter } from './CarsFilter';
import SideNav from './SideNav.svelte';

describe('SideNav.svelte', async () => {
  test('CarsFilterのプロパティが全て空の場合', async () => {
    // Arrange
    const filterEmpty: CarsFilter = {
      makers: [],
      bodyTypes: [],
      powerTrains: [],
      driveSystems: []
    };
    const mockFilterEmpty = writable<CarsFilter>(filterEmpty);
    const mockContext = new Map<any, any>([['filter', mockFilterEmpty]]);
    // Act
    const { getByTestId } = render(SideNav, {
      props: {
        handleChangeFilter: vi.fn()
      },
      context: mockContext
    });
    // Assert
    expect(getByTestId('ul-makers').childElementCount).toEqual(0);
  });

  test('CarsFilterのmakersプロパティがchecked=falseの要素を持つ場合', async () => {
    // Arrange
    const filterMakers: CarsFilter = {
      makers: [{ title: 'マツダ', value: 'マツダ', checked: false }],
      bodyTypes: [],
      powerTrains: [],
      driveSystems: []
    };
    const mockFilterMakers = writable<CarsFilter>(filterMakers);
    const mockContext = new Map<any, any>([['filter', mockFilterMakers]]);
    // Act
    const { getByTestId } = render(SideNav, {
      props: {
        handleChangeFilter: vi.fn()
      },
      context: mockContext
    });
    // Assert
    expect(getByTestId('ul-makers').childElementCount).toEqual(1);
    expect(getByTestId('ul-body-types').childElementCount).toEqual(0);
    expect(getByTestId('ul-power-trains').childElementCount).toEqual(0);
    expect(getByTestId('ul-drive-systems').childElementCount).toEqual(0);
  });

  test('CarsFilterのmakersプロパティがchecked=trueの要素を持つ場合', async () => {
    // Arrange
    const filterMakers: CarsFilter = {
      makers: [{ title: 'マツダ', value: 'マツダ', checked: true }],
      bodyTypes: [],
      powerTrains: [],
      driveSystems: []
    };
    const mockFilterMakers = writable<CarsFilter>(filterMakers);
    const mockContext = new Map<any, any>([['filter', mockFilterMakers]]);
    // Act
    const { getByTestId } = render(SideNav, {
      props: {
        handleChangeFilter: vi.fn()
      },
      context: mockContext
    });
    // Assert
    expect(getByTestId('ul-makers').childElementCount).toEqual(1);
    expect(getByTestId('ul-body-types').childElementCount).toEqual(0);
    expect(getByTestId('ul-power-trains').childElementCount).toEqual(0);
    expect(getByTestId('ul-drive-systems').childElementCount).toEqual(0);
  });

  test('CarsFilterの各プロパティがchecked=trueの要素を持つ場合', async () => {
    // Arrange
    const filterMakers: CarsFilter = {
      makers: [{ title: 'マツダ', value: 'マツダ', checked: true }],
      bodyTypes: [{ title: 'SUV', value: 'SUV', checked: true }],
      powerTrains: [{ title: 'ICE', value: 'カソリン車', checked: true }],
      driveSystems: [{ title: 'AWD', value: 'AWD', checked: true }]
    };
    const mockFilterMakers = writable<CarsFilter>(filterMakers);
    const mockContext = new Map<any, any>([['filter', mockFilterMakers]]);
    // Act
    const { getByTestId } = render(SideNav, {
      props: {
        handleChangeFilter: vi.fn()
      },
      context: mockContext
    });
    // Assert
    expect(getByTestId('ul-makers').childElementCount).toEqual(1);
    expect(getByTestId('ul-body-types').childElementCount).toEqual(1);
    expect(getByTestId('ul-power-trains').childElementCount).toEqual(1);
    expect(getByTestId('ul-drive-systems').childElementCount).toEqual(1);
  });
});
