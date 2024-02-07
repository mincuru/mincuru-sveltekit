import { expect, test } from '@playwright/test';

// test('about page has expected h1', async ({ page }) => {
//   await page.goto('/about');
//   await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
// });

test('/ページのtitleが[みんクル / クルマ検索]であること(/carsにリダイレクト)', async ({ page }) => {
  await page.goto('http://localhost:4173');
  await expect(page).toHaveTitle('みんクル / クルマ検索');
});

test('/carsページのtitleが[みんクル / クルマ検索]であること', async ({ page }) => {
  await page.goto('http://localhost:4173/cars');
  await expect(page).toHaveTitle('みんクル / クルマ検索');
});

test('/cars/1ページのタイトルが[みんクル / クルマ詳細]であること', async ({ page }) => {
  await page.goto('http://localhost:4173/cars/1');
  await expect(page).toHaveTitle('みんクル / クルマ詳細');
});
