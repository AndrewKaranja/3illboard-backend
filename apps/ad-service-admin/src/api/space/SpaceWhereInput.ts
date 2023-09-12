import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SpaceWhereInput = {
  availability?: StringNullableFilter;
  description?: StringNullableFilter;
  dimensions?: StringFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  ownerId?: StringNullableFilter;
  photos?: StringNullableFilter;
  price?: FloatNullableFilter;
  spaceType?: StringNullableFilter;
};
