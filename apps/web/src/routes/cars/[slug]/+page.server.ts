import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = (async ({ params }) => {
  console.log(params);
  const car = await prisma.car.findUnique({
    where: { id: Number(params.slug) }
  });
  if (!car) {
    error(404, {
            message: 'Not found'
          });
  }

  return { car };
}) satisfies PageServerLoad;
