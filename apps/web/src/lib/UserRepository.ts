import type { PrismaClient } from '@prisma/client';
import type { Account } from '$lib/model/Account';

export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getAccount(email: string): Promise<Account> {
    const user = await this.prisma.user.findFirst({
      where: { email: email }
    });
    let ret: Account = {
      id: '',
      name: '',
      email: '',
      image: '',
      favorites: []
    };
    if (user != null) {
      ret.id = user.id;
      ret.name = user.name;
      ret.email = user.email;
      ret.image = user.image;
      ret.favorites = user.favorites;
    }
    return ret;
  }
}
