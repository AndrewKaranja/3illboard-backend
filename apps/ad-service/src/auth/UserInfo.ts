import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user/base/User";

@ObjectType()
export class UserInfo implements Partial<User> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => String)
  email!: string;
  @Field(() => String)
  firstName!: string|null;
  @Field(() => String)
  lastName!: string|null;
  @Field(() => String)
  lastLogin!: Date;
  @Field(() => String)
  phoneNumber!: string|null;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;

}
// @Field(() => String, { nullable: true })
// status!: string|null;
// @Field(() => String, { nullable: true })
// country!: string|null;
// @Field(() => String, { nullable: true })
// kraPin!: string|null;
