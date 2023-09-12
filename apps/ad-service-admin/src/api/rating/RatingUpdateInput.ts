import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";
import { RatingUpdateManyWithoutRatingsInput } from "./RatingUpdateManyWithoutRatingsInput";

export type RatingUpdateInput = {
  advertiserId?: string | null;
  comment?: string | null;
  rating?: RatingWhereUniqueInput | null;
  ratings?: RatingUpdateManyWithoutRatingsInput;
  reviewId?: string | null;
  spaceId?: string | null;
};
