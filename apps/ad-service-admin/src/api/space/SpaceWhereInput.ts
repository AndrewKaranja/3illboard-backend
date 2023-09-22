import { AdvertismentListRelationFilter } from "../advertisment/AdvertismentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SpaceWhereInput = {
  advertisments?: AdvertismentListRelationFilter;
  availability?: JsonFilter;
  bookings?: BookingListRelationFilter;
  description?: StringNullableFilter;
  dimensions?: StringFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  ownerId?: StringNullableFilter;
  photos?: JsonFilter;
  price?: FloatNullableFilter;
  ratings?: RatingListRelationFilter;
  spaceContact?: StringNullableFilter;
  spaceType?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
