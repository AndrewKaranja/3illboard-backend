import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdvertismentWhereInput = {
  adId?: StringNullableFilter;
  advertiserId?: StringNullableFilter;
  content?: StringNullableFilter;
  duration?: StringNullableFilter;
  id?: StringFilter;
  spaceId?: StringNullableFilter;
};
