import type { Account } from '$lib/model/Account';
import type { LayoutServerLoad } from './$types';
import prisma from '$lib/prisma';
import { UserRepository } from '$lib/UserRepository';

export const load: LayoutServerLoad = (async (event) => {
  const session = await event.locals.auth();
  const repository = new UserRepository(prisma);
  let account: Account = {
    id: '',
    name: '',
    email: '',
    favorites: [],
    image: ''
  };
  if (session != null) {
    const record = await repository.getAccount(session!.user!.email || '');
    if (record) {
      account.id = record.id;
      account.name = record.name;
      account.email = record.email;
      account.favorites = record.favorites;
      account.image = session!.user!.image || '';
    }
  }
  return { account };
}) satisfies LayoutServerLoad;
