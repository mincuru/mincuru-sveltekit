import { render, fireEvent } from '@testing-library/svelte';
import Favorite from '$lib/component/Favorite.svelte';
import type { Account } from '$lib/model/Account';
import { writable } from 'svelte/store';

// `$app/forms` の `enhance` 関数を Mock 化
// vi.mock('$app/forms', () => ({
//   enhance: vi.fn(() => {
//     // Mock 処理。例えば、フォーム送信が成功したときの動作を模倣する
//     if (
//       typeof window !== 'undefined' &&
//       window.HTMLFormElement &&
//       !window.HTMLFormElement.prototype.requestSubmit
//     ) {
//       window.HTMLFormElement.prototype.requestSubmit = function () {
//         // ここに必要ならダミーの処理を追加
//         // 例えば、submit イベントを手動で発火させることも可能
//         const event = new Event('submit', { bubbles: true, cancelable: true });
//         this.dispatchEvent(event);
//       };
//     }
//   })
// }));

describe('Favorite.svelte', async () => {
  const account: Account = {
    id: 'xxxx-xxxx-xxxx-xxxx',
    name: 'test',
    email: '',
    favorites: [1, 2],
    image: ''
  };
  const mockAccount = writable<Account>(account);
  const mockContext = new Map<any, any>([['account', mockAccount]]);

  test('render with favorite true', async () => {
    // Arrange
    // Act
    const { getByLabelText } = render(Favorite, {
      props: {
        carId: 1,
        favorite: true,
        toggle: vi.fn()
      },
      context: mockContext
    });
    // Assert
    const button = getByLabelText('お気に入り');
    expect(button.innerHTML).toContain('text-yellow-500');
  });

  test('render wirh favorite false', async () => {
    // Arrange
    // Act
    const { getByLabelText } = render(Favorite, {
      props: {
        carId: 1,
        favorite: false,
        toggle: vi.fn()
      },
      context: mockContext
    });
    // Assert
    const button = getByLabelText('お気に入り');
    expect(button.innerHTML).not.toContain('text-yellow-500');
  });

  test('render wirh favorite false with Fragment', async () => {
    // Arrange
    // Act
    const { getByLabelText } = render(Favorite, {
      props: {
        carId: 1,
        favorite: false,
        toggle: vi.fn()
      },
      context: mockContext
    });
    // Assert
    const button = getByLabelText('お気に入り');
    expect(button.innerHTML).not.toContain('text-yellow-500');
  });

  test('click favorite from false', async () => {
    // Arrange
    const toggleMock = vi.fn();
    const { getByLabelText, component } = render(Favorite, {
      props: {
        carId: 1,
        favorite: false,
        toggle: toggleMock
      },
      context: mockContext
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

  // test('click favorite from true', async () => {
  //   // Arrange
  //   const toggleMock = vi.fn();
  //   const { getByLabelText } = render(ContainerFavorite, {
  //     props: {
  //       Component: Favorite,
  //       carId: 1,
  //       favorite: true,
  //       toggle: toggleMock,
  //       ContextValues: contextValues
  //     }
  //   });
  //   const button1 = getByLabelText('お気に入り');
  //   expect(button1.innerHTML).toContain('text-yellow-500');
  //   // Act1
  //   await fireEvent.click(button1);
  //   // Assert1
  //   expect(toggleMock).toHaveBeenCalledTimes(1);
  //   expect(toggleMock).toHaveBeenCalledWith(false);
  //   const button2 = getByLabelText('お気に入り');
  //   expect(button2.innerHTML).not.toContain('text-yellow-500');
  //   // Act2
  //   await fireEvent.click(button2);
  //   // Assert2
  //   expect(toggleMock).toHaveBeenCalledTimes(2);
  //   expect(toggleMock).toHaveBeenCalledWith(true);
  //   const button3 = getByLabelText('お気に入り');
  //   expect(button3.innerHTML).toContain('text-yellow-500');
  // });
});
