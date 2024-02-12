import { render, fireEvent } from '@testing-library/svelte';
import Favorite from '$lib/component/Favorite.svelte';
import type { Account } from '$lib/model/Account';
import { writable } from 'svelte/store';
import ContainerFavorite from './__mock__/ContainerFavorite.svelte';

vi.mock('$app/forms', () => ({
  enhance: vi.fn()
}));

describe('Favorite.svelte', async () => {
  const account: Account = {
    id: 'xxxx-xxxx-xxxx-xxxx',
    name: 'test',
    email: '',
    favorites: [1, 2],
    image: ''
  };
  const mockAccount = writable<Account>(account);
  const contextValues = [{ key: 'account', value: mockAccount }];

  test('render with favorite true', async () => {
    // Arrange
    const toggleMock = vi.fn();
    // Act
    const { getByLabelText } = render(ContainerFavorite, {
      props: {
        Component: Favorite,
        carId: 1,
        favorite: true,
        toggle: toggleMock,
        ContextValues: contextValues
      }
    });
    // Assert
    const button = getByLabelText('お気に入り');
    expect(button.innerHTML).toContain('text-yellow-500');
  });

  test('render wirh favorite false', async () => {
    // Arrange
    const toggleMock = vi.fn();
    // Act
    const { getByLabelText } = render(ContainerFavorite, {
      props: {
        Component: Favorite,
        carId: 1,
        favorite: false,
        toggle: toggleMock,
        ContextValues: contextValues
      }
    });
    // Assert
    const button = getByLabelText('お気に入り');
    expect(button.innerHTML).not.toContain('text-yellow-500');
  });

  test('click favorite from false', async () => {
    // Arrange
    const toggleMock = vi.fn();
    const { getByLabelText, component } = render(ContainerFavorite, {
      props: {
        Component: Favorite,
        carId: 1,
        favorite: false,
        toggle: toggleMock,
        ContextValues: contextValues
      }
    });
    const button1 = getByLabelText('お気に入り');
    expect(button1.innerHTML).not.toContain('text-yellow-500');
    // Act1
    await fireEvent.click(button1);
    // Assert1
    expect(toggleMock).toHaveBeenCalledTimes(1);
    expect(toggleMock).toHaveBeenCalledWith(true);
    const button2 = getByLabelText('お気に入り');
    expect(button2.innerHTML).toContain('text-yellow-500');
    // Act2
    await fireEvent.click(button2);
    // Assert2
    expect(toggleMock).toHaveBeenCalledTimes(2);
    expect(toggleMock).toHaveBeenCalledWith(false);
    const button3 = getByLabelText('お気に入り');
    expect(button3.innerHTML).not.toContain('text-yellow-500');
  });

  test('click favorite from true', async () => {
    // Arrange
    const toggleMock = vi.fn();
    const { getByLabelText } = render(ContainerFavorite, {
      props: {
        Component: Favorite,
        carId: 1,
        favorite: true,
        toggle: toggleMock,
        ContextValues: contextValues
      }
    });
    const button1 = getByLabelText('お気に入り');
    expect(button1.innerHTML).toContain('text-yellow-500');
    // Act1
    await fireEvent.click(button1);
    // Assert1
    expect(toggleMock).toHaveBeenCalledTimes(1);
    expect(toggleMock).toHaveBeenCalledWith(false);
    const button2 = getByLabelText('お気に入り');
    expect(button2.innerHTML).not.toContain('text-yellow-500');
    // Act2
    await fireEvent.click(button2);
    // Assert2
    expect(toggleMock).toHaveBeenCalledTimes(2);
    expect(toggleMock).toHaveBeenCalledWith(true);
    const button3 = getByLabelText('お気に入り');
    expect(button3.innerHTML).toContain('text-yellow-500');
  });
});
