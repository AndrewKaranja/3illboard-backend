/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingWhereInput } from "./BookingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BookingOrderByInput } from "./BookingOrderByInput";

@ArgsType()
class BookingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BookingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BookingWhereInput, { nullable: true })
  @Type(() => BookingWhereInput)
  where?: BookingWhereInput;

  @ApiProperty({
    required: false,
    type: [BookingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BookingOrderByInput], { nullable: true })
  @Type(() => BookingOrderByInput)
  orderBy?: Array<BookingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BookingFindManyArgs as BookingFindManyArgs };
