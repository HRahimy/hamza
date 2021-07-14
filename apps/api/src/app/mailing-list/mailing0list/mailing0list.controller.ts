import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {CreateSubscriberCommand} from "../commands/impl/create-subscriber.command";
import {MailingSubscriberModel} from "../models/mailing-subscriber.model";

@Controller('mailinglist')
export class Mailing0listController {
  constructor(
    private queryBus: QueryBus,
    private commandBus: CommandBus
  ) {

  }

  @Post()
  @HttpCode(200)
  async createEmployee(@Body() command: CreateSubscriberCommand): Promise<MailingSubscriberModel> {
    return await this.commandBus.execute(new CreateSubscriberCommand(command.name, command.email));
  }
}
