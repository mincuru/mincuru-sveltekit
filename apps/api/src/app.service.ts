import { Injectable } from '@nestjs/common';
import { PrismaService } from '@repo/prisma-nestjs-plugin';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // Usersを取得するクエリ
  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
