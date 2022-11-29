import { PartialType } from '@nestjs/swagger';
import { CreateCommentModuleDto } from './create-comment-module.dto';

export class UpdateCommentModuleDto extends PartialType(CreateCommentModuleDto) {}
