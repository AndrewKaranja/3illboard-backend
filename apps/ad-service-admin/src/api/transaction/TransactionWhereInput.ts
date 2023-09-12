import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  advertiserId?: StringNullableFilter;
  amount?: StringNullableFilter;
  bookingId?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
  transactionId?: StringNullableFilter;
};
