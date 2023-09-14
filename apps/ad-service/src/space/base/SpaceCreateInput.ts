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
import { AdvertismentCreateNestedManyWithoutSpacesInput } from "./AdvertismentCreateNestedManyWithoutSpacesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { BookingCreateNestedManyWithoutSpacesInput } from "./BookingCreateNestedManyWithoutSpacesInput";
import { RatingCreateNestedManyWithoutSpacesInput } from "./RatingCreateNestedManyWithoutSpacesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class SpaceCreateInput {
  @ApiProperty({
    required: false,
    type: () => AdvertismentCreateNestedManyWithoutSpacesInput,
  })
  @ValidateNested()
  @Type(() => AdvertismentCreateNestedManyWithoutSpacesInput)
  @IsOptional()
  @Field(() => AdvertismentCreateNestedManyWithoutSpacesInput, {
    nullable: true,
  })
  advertisments?: AdvertismentCreateNestedManyWithoutSpacesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  availability?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutSpacesInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutSpacesInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutSpacesInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutSpacesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  dimensions!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ownerId?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  photos?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => RatingCreateNestedManyWithoutSpacesInput,
  })
  @ValidateNested()
  @Type(() => RatingCreateNestedManyWithoutSpacesInput)
  @IsOptional()
  @Field(() => RatingCreateNestedManyWithoutSpacesInput, {
    nullable: true,
  })
  ratings?: RatingCreateNestedManyWithoutSpacesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  spaceId!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  spaceType?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { SpaceCreateInput as SpaceCreateInput };
