import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModuleModule } from './comment-module/comment-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './orm.config'

@Module({
  imports: [TypeOrmModule.forRoot(config) , CommentModuleModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
