import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentModuleDto } from './dto/create-comment-module.dto';
import { UpdateCommentModuleDto } from './dto/update-comment-module.dto';
import { Comment } from './entities/comment-module.entity';

@Injectable()
export class CommentModuleService {
  constructor(
    @InjectRepository(Comment)
    private usersRepository: Repository<Comment>,
  ) {}
  async create(createCommentModuleDto: CreateCommentModuleDto) {
    const result = await this.usersRepository.save(createCommentModuleDto);
    if(!result) throw new BadRequestException()

    return {
      status:200,
      message:'SUCCESS'
    }
  }

  findAll() {
    return `This action returns all commentModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentModule`;
  }

  update(id: number, updateCommentModuleDto: UpdateCommentModuleDto) {
    return `This action updates a #${id} commentModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentModule`;
  }
}
