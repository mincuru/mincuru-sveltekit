import '@testing-library/jest-dom';
import { describe, test } from 'vitest';
import { render } from '@testing-library/svelte';
import Layout from './+layout.svelte';
import type { Account } from '$lib/model/Account';
import ContainerLayout from './__mock__/ContainerLayout.svelte';
import { writable } from 'svelte/store';

describe('+layout.svelte', () => {
  test('ログインしたらログアウトボタンを表示する', async () => {
    // Arrange
    const account: Account = {
      id: 'xxxx-xxxx-xxxx-xxxx',
      name: 'hoge',
      email: 'hoge@example.com',
      favorites: [1, 2, 3],
      image: 'https://example.com/hoge.png'
    };
    const mockAccount = writable<Account>(account);
    const kvPairs = [{ key: 'account', value: mockAccount }];
    // Act
    const { getByText } = render(ContainerLayout, {
      props: {
        Component: Layout,
        data: { account: account },
        KVPairs: kvPairs
      }
    });
    // Assert
    expect(getByText('ログアウト')).toBeInTheDocument();
  });

  test('ログアウトしたらログインボタンを表示する', async () => {
    // Arrange
    const account: Account = {
      id: '',
      name: '',
      email: '',
      favorites: [],
      image: ''
    };
    const mockAccount = writable<Account>(account);
    const kvPairs = [{ key: 'account', value: mockAccount }];
    // Act
    const { getByText } = render(ContainerLayout, {
      props: {
        Component: Layout,
        data: { account: account },
        KVPairs: kvPairs
      }
    });
    // Assert
    expect(getByText('ログイン')).toBeInTheDocument();
  });
});
