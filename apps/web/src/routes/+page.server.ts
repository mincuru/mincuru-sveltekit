import { redirect } from '@sveltejs/kit';

export const load = async () => {
  // /carsに無条件リダイレクト
  redirect(302, '/cars');
};
