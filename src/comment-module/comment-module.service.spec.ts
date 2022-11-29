import { Test, TestingModule } from '@nestjs/testing';
import { CommentModuleService } from './comment-module.service';

describe('CommentModuleService', () => {
  let service: CommentModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentModuleService],
    }).compile();

    service = module.get<CommentModuleService>(CommentModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
