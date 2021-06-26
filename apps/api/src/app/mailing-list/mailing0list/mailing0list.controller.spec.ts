import { Test, TestingModule } from '@nestjs/testing';
import { Mailing0listController } from './mailing0list.controller';

describe('Mailing0listController', () => {
  let controller: Mailing0listController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Mailing0listController],
    }).compile();

    controller = module.get<Mailing0listController>(Mailing0listController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
