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
import { AdvertismentWhereUniqueInput } from "./AdvertismentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AdvertismentUpdateInput } from "./AdvertismentUpdateInput";

@ArgsType()
class UpdateAdvertismentArgs {
  @ApiProperty({
    required: true,
    type: () => AdvertismentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdvertismentWhereUniqueInput)
  @Field(() => AdvertismentWhereUniqueInput, { nullable: false })
  where!: AdvertismentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AdvertismentUpdateInput,
  })
  @ValidateNested()
  @Type(() => AdvertismentUpdateInput)
  @Field(() => AdvertismentUpdateInput, { nullable: false })
  data!: AdvertismentUpdateInput;
}

export { UpdateAdvertismentArgs as UpdateAdvertismentArgs };
