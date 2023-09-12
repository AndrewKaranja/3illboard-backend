import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";
import { RatingCreateNestedManyWithoutRatingsInput } from "./RatingCreateNestedManyWithoutRatingsInput";

export type RatingCreateInput = {
  advertiserId?: string | null;
  comment?: string | null;
  rating?: RatingWhereUniqueInput | null;
  ratings?: RatingCreateNestedManyWithoutRatingsInput;
  reviewId?: string | null;
  spaceId?: string | null;
};
