import { Test, TestingModule } from '@nestjs/testing';
import { CommentModuleController } from './comment-module.controller';
import { CommentModuleService } from './comment-module.service';

describe('CommentModuleController', () => {
  let controller: CommentModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentModuleController],
      providers: [CommentModuleService],
    }).compile();

    controller = module.get<CommentModuleController>(CommentModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
