import { describe, test } from 'vitest';
import { render } from '@testing-library/svelte';
import Page from './+page.svelte';
import type { Account } from '$lib/model/Account';
import ContainerPage from './__mock__/ContainerPage.svelte';
import { writable } from 'svelte/store';

describe('+page.svelte', () => {
  test('renders the component and displays data', async () => {
    // Arrange
    const account: Account = {
      id: 'xxxx-xxxx-xxxx-xxxx',
      name: 'hoge',
      email: 'hoge@example.com',
      favorites: [1, 2, 3],
      image: ''
    };
    const mockAccount = writable<Account>(account);
    const contextValues = [{ key: 'account', value: mockAccount }];
    // Act
    const { getByTestId, getByTitle } = render(ContainerPage, {
      props: {
        Component: Page,
        ContextValues: contextValues
      }
    });
    // Assert
    // expect(getByTestId('test-label').innerHTML).toBe('うんこ 1');
    // expect(getByTestId('unko').innerHTML).toBe('unko');
    // expect(getByTestId('copyright').innerHTML).toBe('Copyright © 2023 - All right reserved');
  });
});
