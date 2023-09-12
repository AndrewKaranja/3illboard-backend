import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  advertiserId?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ratingId?: SortOrder;
  reviewId?: SortOrder;
  spaceId?: SortOrder;
  updatedAt?: SortOrder;
};
