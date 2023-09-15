import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingWhereInput = {
  advertiserId?: StringNullableFilter;
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  reviewId?: StringNullableFilter;
  space?: SpaceWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
