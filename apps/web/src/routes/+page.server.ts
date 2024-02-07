import { redirect } from '@sveltejs/kit';

export const load = async () => {
  // /carsに無条件リダイレクト
  redirect(301, '/cars');
};
