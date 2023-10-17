import { AdvertismentListRelationFilter } from "../advertisment/AdvertismentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SpaceWhereInput = {
  advertisments?: AdvertismentListRelationFilter;
  availability?: JsonFilter;
  bookingFee?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  country?: StringNullableFilter;
  county?: StringNullableFilter;
  description?: StringNullableFilter;
  dimensions?: StringFilter;
  distanceToGround?: StringNullableFilter;
  facingRoad?: BooleanNullableFilter;
  farthestVisibility?: StringNullableFilter;
  id?: StringFilter;
  landmark?: StringNullableFilter;
  legalDocs?: JsonFilter;
  location?: StringNullableFilter;
  maintenanceCharge?: StringNullableFilter;
  maintenanceInterval?: StringNullableFilter;
  minBookingPeriod?: StringNullableFilter;
  ownerId?: StringNullableFilter;
  photos?: JsonFilter;
  price?: FloatNullableFilter;
  pricingPeriod?: StringNullableFilter;
  ratings?: RatingListRelationFilter;
  showPriceAs?: StringNullableFilter;
  spaceContact?: StringNullableFilter;
  spaceFeatures?: JsonFilter;
  spaceRestrictions?: StringNullableFilter;
  spaceTitle?: StringNullableFilter;
  spaceType?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  visibleAtNight?: BooleanNullableFilter;
};
