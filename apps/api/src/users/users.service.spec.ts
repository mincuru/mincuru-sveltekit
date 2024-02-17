import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('post()は新しいユーザーを返す', async () => {
    // const newUser = await service.post({
    //   name: 'John Doe',
    //   email: 'john@example.com',
    // });
    // expect(newUser).toHaveProperty('id');
  });
});
