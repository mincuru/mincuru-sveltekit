import { render, fireEvent } from '@testing-library/svelte';
import Favorite from '$lib/component/Favorite.svelte';

describe('Favorite.svelte', async () => {
  test('render favorite true', async () => {
    const toggleFavorite = () => {};
    const { getByLabelText } = render(Favorite, { favorite: true, toggle: toggleFavorite });
    const button = getByLabelText('お気に入り');
    expect(button.innerHTML).toContain('text-yellow-500');
  });

  test('render favorite false', async () => {
    const toggleFavorite = () => {};
    const { getByLabelText } = render(Favorite, { favorite: false, toggle: toggleFavorite });
    const button = getByLabelText('お気に入り');
    expect(button.innerHTML).not.toContain('text-yellow-500');
  });

  test('click favorite from false', async () => {
    // Arrange
    const toggleMock = vi.fn();
    const { getByLabelText, component } = render(Favorite, {
      favorite: false,
      toggle: toggleMock
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
    const { getByLabelText } = render(Favorite, {
      favorite: true,
      toggle: toggleMock
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
