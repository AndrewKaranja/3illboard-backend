import { ArgsType, Field } from "@nestjs/graphql";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CheckUserValues, Credentials, SignupCredentials } from "./Credentials";

@ArgsType()
export class LoginArgs {
  @Field(() => Credentials, { nullable: false })
  @Type(() => Credentials)
  @ValidateNested()
  credentials!: Credentials;
}

@ArgsType()
export class SignupArgs {
  @Field(() => SignupCredentials, { nullable: false })
  @Type(() => SignupCredentials)
  @ValidateNested()
  SignupCredentials!: SignupCredentials;
}

@ArgsType()
export class CheckUserArgs {
  @Field(() => CheckUserValues, { nullable: false })
  @Type(() => CheckUserValues)
  @ValidateNested()
  CheckUserValues!: CheckUserValues;
}
