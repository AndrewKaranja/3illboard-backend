import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  advertiserId?: StringNullableFilter;
  amount?: StringNullableFilter;
  booking?: BookingWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
  transactionId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
