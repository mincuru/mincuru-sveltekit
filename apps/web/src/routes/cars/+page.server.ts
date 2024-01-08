import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import { CarsRepository } from './CarsRepository';

export const load: PageServerLoad = (async ({ url, params, route }) => {
  const repository = new CarsRepository(prisma);

  // DBとurlからfilterを構築
  const filter = await repository.generateFilter(url);

  // filterを使ってDBからデータを取得
  const cars = await repository.queryCars(filter);
  return { cars, filter };
}) satisfies PageServerLoad;
