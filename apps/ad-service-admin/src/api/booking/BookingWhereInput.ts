import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  adId?: StringNullableFilter;
  advertiserId?: StringNullableFilter;
  bookingId?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  space?: SpaceWhereUniqueInput;
  spaceId?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  totalPrice?: FloatNullableFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
