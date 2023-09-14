import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdvertismentWhereInput = {
  adId?: StringNullableFilter;
  advertiserId?: StringNullableFilter;
  content?: StringNullableFilter;
  duration?: StringNullableFilter;
  id?: StringFilter;
  space?: SpaceWhereUniqueInput;
  spaceId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
