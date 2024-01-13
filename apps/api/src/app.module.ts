import { Module } from '@nestjs/common';
import { PrismaModule } from '@repo/prisma-nestjs-plugin';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
