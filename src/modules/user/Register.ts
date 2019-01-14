import { Resolver, Query, Mutation, Arg } from "type-graphql";
import * as bcrypt from "bcryptjs";
import { User } from "../../entity/user";

@Resolver()
export class RegisterResolver {
  @Query(() => String, { name: "helloworld", nullable: true })
  async hello() {
    // fake async in this example
    return "Hello World";
  }

  @Mutation(() => User)
  async register(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User> {
    // fake async in this example
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save();
    return user;
  }
}
