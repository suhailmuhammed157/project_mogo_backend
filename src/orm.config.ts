import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config:TypeOrmModuleOptions ={
    type:'postgres',
    port:5432,
    host:'127.0.0.1',
    database:'comment',
    username: 'postgres',
    password: 'password',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,

}