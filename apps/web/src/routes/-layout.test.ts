import '@testing-library/jest-dom';
import { describe, test } from 'vitest';
import { render } from '@testing-library/svelte';
import Layout from './+layout.svelte';
import type { Account } from '$lib/model/Account';
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
    const mockContext = new Map<any, any>([['account', mockAccount]]);
    // Act
    const { getByText } = render(Layout, {
      props: {
        data: { account: account }
      },
      context: mockContext
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
    const mockContext = new Map([['account', mockAccount]]);
    // Act
    const { getByText } = render(Layout, {
      props: {
        data: { account: account }
      },
      context: mockContext
    });
    // Assert
    expect(getByText('ログイン')).toBeInTheDocument();
  });
});
