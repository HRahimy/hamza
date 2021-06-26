import {AggregateRoot} from "@nestjs/cqrs";

export class MailingSubscriberModel extends AggregateRoot {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly email: string
  ) {
    super();
  }
}
