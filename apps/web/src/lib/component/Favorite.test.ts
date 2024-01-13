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

  test('click favorite', async () => {
    const toggleFavorite = () => {};
    const { getByLabelText } = render(Favorite, {
      favorite: false,
      toggle: toggleFavorite
    });
    const button = getByLabelText('お気に入り');
    expect(button.innerHTML).not.toContain('text-yellow-500');
    await fireEvent.click(button);
    expect(button.innerHTML).toContain('text-yellow-500');
    await fireEvent.click(button);
    expect(button.innerHTML).not.toContain('text-yellow-500');
  });
});
