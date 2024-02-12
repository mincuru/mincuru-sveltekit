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

  async addFavorite(userId: string, favorite: number): Promise<string> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    });
    // ユーザーが見つからない場合空文字列を返す
    if (user == null) return '';
    // 既にお気に入りに追加されている場合は何もしない
    if (user.favorites.includes(favorite)) user.id;
    // お気に入りに追加
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        favorites: {
          push: favorite
        }
      }
    });
    return user.id;
  }

  async removeFavorite(userId: string, favorite: number): Promise<string> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    });
    // ユーザーが見つからない場合空文字列を返す
    if (user == null) return '';
    // お気に入りに追加されていない場合は何もしない
    if (!user.favorites.includes(favorite)) user.id;
    // お気に入りから削除
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        favorites: {
          set: user.favorites.filter((x) => x !== favorite)
        }
      }
    });
    return user.id;
  }

  async updateAccount(account: Account): Promise<void> {
    await this.prisma.user.update({
      where: { id: account.id },
      data: {
        name: account.name,
        email: account.email,
        image: account.image,
        favorites: account.favorites
      }
    });
  }
}
