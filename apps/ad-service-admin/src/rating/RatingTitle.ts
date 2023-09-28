import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "advertiserId";

export const RatingTitle = (record: TRating): string => {
  return record.advertiserId?.toString() || String(record.id);
};
