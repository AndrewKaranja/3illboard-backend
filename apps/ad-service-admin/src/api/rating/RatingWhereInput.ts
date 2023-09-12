import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";
import { RatingListRelationFilter } from "./RatingListRelationFilter";

export type RatingWhereInput = {
  advertiserId?: StringNullableFilter;
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: RatingWhereUniqueInput;
  ratings?: RatingListRelationFilter;
  reviewId?: StringNullableFilter;
  spaceId?: StringNullableFilter;
};
