import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import { CarsRepository } from './CarsRepository';
import { UserRepository } from '$lib/UserRepository';

export const load: PageServerLoad = (async ({ url, params, route }) => {
  const repository = new CarsRepository(prisma);

  // DBとurlからfilterを構築
  const filter = await repository.generateFilter(url);

  // filterを使ってDBからデータを取得
  const cars = await repository.queryCars(filter);

  return { cars, filter };
}) satisfies PageServerLoad;

export const actions = {
  updateFavorite: async ({ request }) => {
    const data = await request.formData();
    const userId = String(data.get('userId'));
    const carId = Number(data.get('carId'));
    const favorite = String(data.get('favorite')) == 'true';
    const repository = new UserRepository(prisma);
    if (favorite) {
      await repository.addFavorite(userId, carId);
    } else {
      await repository.removeFavorite(userId, carId);
    }
  }
};
