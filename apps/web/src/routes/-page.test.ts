// import { describe, it, expect, vi } from 'vitest';
// import { render } from '@testing-library/svelte';
// import Page from './+page.svelte';

// // `+page.server.ts`のload関数をモック化
// // vi.mock('./+page.server.ts', () => ({
// //   load: vi.fn().mockResolvedValue({
// //     value: 1
// //   })
// // }));

// describe('+page.svelte', () => {
//   it('renders the component and displays data', async () => {
//     // モックデータを用いてコンポーネントをレンダリング
//     const account = {
//       id: 1,
//       name: 'hoge',
//       email: 'hoge@example.com',
//       favorites: [1, 2, 3]
//     };
//     const { getByTestId } = render(Page, { props: { data: { value: 1, account: account } } });
//     // const data: PageData;

//     // const { getByText } = render(Page, {
//     //   data: data
//     // });

//     // "うんこ 1" というテキストが表示されているかを確認
//     expect(getByTestId('test-label').innerHTML).toBe('うんこ 1');
//   });
// });
