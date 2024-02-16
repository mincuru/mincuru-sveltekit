import { Module } from '@nestjs/common';
// import { PrismaModule } from '@repo/prisma-nestjs-plugin';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '@repo/prisma-nestjs-plugin';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
