import type { Account } from '$lib/model/Account';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (async ({ url, params, route }) => {
  const account: Account = {
    id: 1,
    name: 'test',
    email: '',
    favorites: [1, 2]
  };
  return { account };
}) satisfies LayoutServerLoad;
