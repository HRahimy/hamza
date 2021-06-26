import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import { MailingListModule } from './mailing-list/mailing-list.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'site')
    }),
    // Reference for db setup https://dev.to/shree_j/how-to-install-and-run-psql-using-docker-41j2#:~:text=Connecting%20to%20the%20PSQL%20server%20via%20CLI%20%3A&text=Run%20the%20below%20command%20to,p%205432%20%2DU%20postgres%20%2DW
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '127.0.0.1',
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'mypassword',
      database: process.env.DB_NAME || 'postgres',
      // entities: ['src/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy()
    }),
    MailingListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
