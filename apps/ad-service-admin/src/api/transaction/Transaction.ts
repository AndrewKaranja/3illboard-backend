import { Booking } from "../booking/Booking";
import { User } from "../user/User";

export type Transaction = {
  advertiserId: string | null;
  amount: string | null;
  booking?: Booking | null;
  bookingId: string | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  transactionDate: Date | null;
  transactionId: string | null;
  updatedAt: Date;
  user?: User | null;
};
