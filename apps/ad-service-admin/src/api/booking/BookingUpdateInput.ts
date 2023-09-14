import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { TransactionUpdateManyWithoutBookingsInput } from "./TransactionUpdateManyWithoutBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  adId?: string | null;
  advertiserId?: string | null;
  bookingId?: string | null;
  endDate?: Date | null;
  space?: SpaceWhereUniqueInput | null;
  spaceId?: string | null;
  startDate?: Date | null;
  totalPrice?: number | null;
  transactions?: TransactionUpdateManyWithoutBookingsInput;
  user?: UserWhereUniqueInput | null;
};
