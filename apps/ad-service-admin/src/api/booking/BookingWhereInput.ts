import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type BookingWhereInput = {
  adId?: StringNullableFilter;
  advertiserId?: StringNullableFilter;
  bookingId?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  spaceId?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  totalPrice?: FloatNullableFilter;
};
