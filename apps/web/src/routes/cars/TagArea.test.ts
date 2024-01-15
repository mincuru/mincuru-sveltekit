// https://svelte-recipes.netlify.app/testing/
import { render } from '@testing-library/svelte';
import ContextTest from '$lib/__mock__/ContextTest.svelte';

import { writable } from 'svelte/store';
import type { CarsFilter } from './CarsFilter';
import TagArea from './TagArea.svelte';

describe('TagArea.svelte', async () => {
  test('CarsFilterのプロパティが全て空の場合', async () => {
    // Arrange
    const filterEmpty: CarsFilter = {
      makers: [],
      bodyTypes: [],
      powerTrains: [],
      driveSystems: []
    };
    const mockFilterEmpty = writable<CarsFilter>(filterEmpty);
    const kvPairs = [{ key: 'filter', value: mockFilterEmpty }];
    // Act
    const { getByTestId } = render(ContextTest, {
      props: {
        Component: TagArea,
        KVPairs: kvPairs
      }
    });
    // Assert
    expect(getByTestId('filter-items').childElementCount).toEqual(0);
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
    const kvPairs = [{ key: 'filter', value: mockFilterMakers }];
    // Act
    const { getByTestId } = render(ContextTest, {
      props: {
        Component: TagArea,
        KVPairs: kvPairs
      }
    });
    // Assert
    expect(getByTestId('filter-items').childElementCount).toEqual(0);
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
    const kvPairs = [{ key: 'filter', value: mockFilterMakers }];
    // Act
    const { getByTestId } = render(ContextTest, {
      props: {
        Component: TagArea,
        KVPairs: kvPairs
      }
    });
    // Assert
    expect(getByTestId('filter-items').childElementCount).toEqual(1);
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
    const kvPairs = [{ key: 'filter', value: mockFilterMakers }];
    // Act
    const { getByTestId } = render(ContextTest, {
      props: {
        Component: TagArea,
        KVPairs: kvPairs
      }
    });
    // Assert
    expect(getByTestId('filter-items').childElementCount).toEqual(4);
  });
});
