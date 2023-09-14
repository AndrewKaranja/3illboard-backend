import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingWhereInput = {
  advertiserId?: StringNullableFilter;
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: DecimalNullableFilter;
  reviewId?: StringNullableFilter;
  space?: SpaceWhereUniqueInput;
  spaceId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
