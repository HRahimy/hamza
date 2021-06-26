import {Module} from '@nestjs/common';
import {CqrsModule} from "@nestjs/cqrs";
import {TypeOrmModule} from "@nestjs/typeorm";
import {entities} from './entities';
import {Mailing0listController} from './mailing0list/mailing0list.controller';
import {CommandHandlers} from "./commands/handlers";

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([...entities])
  ],
  controllers: [Mailing0listController],
  providers: [
    ...CommandHandlers
  ]
})
export class MailingListModule {

}
