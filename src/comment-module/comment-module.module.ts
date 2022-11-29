import { Module } from '@nestjs/common';
import { CommentModuleService } from './comment-module.service';
import { CommentModuleController } from './comment-module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment-module.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Comment])],
  controllers: [CommentModuleController],
  providers: [CommentModuleService]
})
export class CommentModuleModule {}
