import { Space } from "../space/Space";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Booking = {
  adId: string | null;
  advertiserId: string | null;
  bookingId: string | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  space?: Space | null;
  spaceId: string | null;
  startDate: Date | null;
  totalPrice: number | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
