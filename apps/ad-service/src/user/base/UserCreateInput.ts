/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdvertismentCreateNestedManyWithoutUsersInput } from "./AdvertismentCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SpaceCreateNestedManyWithoutUsersInput } from "./SpaceCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AdvertismentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AdvertismentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AdvertismentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  advertisments?: AdvertismentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  lastLogin!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => RatingCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RatingCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RatingCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  ratings?: RatingCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SpaceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SpaceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SpaceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  spaces?: SpaceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };
