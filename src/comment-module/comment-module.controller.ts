import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentModuleService } from './comment-module.service';
import { CreateCommentModuleDto } from './dto/create-comment-module.dto';
import { UpdateCommentModuleDto } from './dto/update-comment-module.dto';

@Controller('comment-module')
export class CommentModuleController {
  constructor(private readonly commentModuleService: CommentModuleService) {}

  @Post('comment')
  create(@Body() createCommentModuleDto: CreateCommentModuleDto) {
    return this.commentModuleService.create(createCommentModuleDto);
  }

  @Get()
  findAll() {
    return this.commentModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentModuleDto: UpdateCommentModuleDto) {
    return this.commentModuleService.update(+id, updateCommentModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentModuleService.remove(+id);
  }
}
