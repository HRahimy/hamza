export class CreateSubscriberCommand {
  constructor(
    public readonly name?: string,
    public readonly email?: string
  ) {
  }

}
