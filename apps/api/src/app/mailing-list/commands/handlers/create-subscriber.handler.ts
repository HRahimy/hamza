import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {CreateSubscriberCommand} from "../impl/create-subscriber.command";
import {InjectRepository} from "@nestjs/typeorm";
import {MailingSubscriberEntity} from "../../entities/mailing-subscriber.entity";
import {Repository} from "typeorm";
import {MailingSubscriberModel} from "../../models/mailing-subscriber.model";
import {InternalServerErrorException} from "@nestjs/common";

@CommandHandler(CreateSubscriberCommand)
export class CreateSubscriberHandler implements ICommandHandler<CreateSubscriberCommand> {
  constructor(
    @InjectRepository(MailingSubscriberEntity)
    private mailingSubscriberRepository: Repository<MailingSubscriberEntity>,
  ) {
  }

  async execute(command: CreateSubscriberCommand): Promise<MailingSubscriberModel> {
    const {email, name} = command;

    const newSubscriber = <MailingSubscriberEntity>{
      email: email,
      name: name,
    };

    const createdSubscriber = await this.mailingSubscriberRepository.save(newSubscriber).catch((err) => {
      throw new InternalServerErrorException(
        `CreateSubscriberCommand(${command}) failed with error(${err})`
      );
    });

    return new MailingSubscriberModel(
      createdSubscriber.id,
      createdSubscriber.name,
      createdSubscriber.email,
    );
  }
}

