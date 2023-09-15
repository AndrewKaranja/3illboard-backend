import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { TransactionCreateNestedManyWithoutBookingsInput } from "./TransactionCreateNestedManyWithoutBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  adId?: string | null;
  advertiserId?: string | null;
  bookingId?: string | null;
  endDate?: Date | null;
  space?: SpaceWhereUniqueInput | null;
  startDate?: Date | null;
  totalPrice?: number | null;
  transactions?: TransactionCreateNestedManyWithoutBookingsInput;
  user?: UserWhereUniqueInput | null;
};
