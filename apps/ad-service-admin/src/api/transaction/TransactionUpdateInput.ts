import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  advertiserId?: string | null;
  amount?: string | null;
  booking?: BookingWhereUniqueInput | null;
  bookingId?: string | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  transactionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
