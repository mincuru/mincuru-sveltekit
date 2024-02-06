import type { Account } from '$lib/model/Account';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (async (event) => {
  const account: Account = {
    id: 1,
    name: 'test',
    email: '',
    favorites: [1, 2],
    session: await event.locals.auth()
  };
  return { account };
}) satisfies LayoutServerLoad;
