import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, ID, ObjectType, Root } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  // Field is for GraphQL query and column is for database
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  name(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Column("bool", { default: false })
  confirmed: boolean;
}
