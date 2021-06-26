import {Column, Entity, PrimaryColumn} from "typeorm";
import {ColumnNumericTransformer} from "@hamza/typeorm-column-transformers";

@Entity({name: 'mailing-subscribers'})
export class MailingSubscriberEntity {
  /*
* Cannot use PrimaryGeneratedColumn decorator here because we need to use a
* transformer to handle postgres bigint values correctly.
* Reference: https://github.com/typeorm/typeorm/issues/873#issuecomment-424643086
* */
  @PrimaryColumn('bigint', {
    transformer: new ColumnNumericTransformer(),
    generated: 'increment'
  })
  public id: number;

  @Column('text')
  public name: string;

  @Column('text', {
    unique: true,
    nullable: false
  })
  public email: string;
}
