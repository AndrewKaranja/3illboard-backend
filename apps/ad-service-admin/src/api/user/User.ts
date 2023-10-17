import { Advertisment } from "../advertisment/Advertisment";
import { Booking } from "../booking/Booking";
import { Notification } from "../notification/Notification";
import { Rating } from "../rating/Rating";
import { JsonValue } from "type-fest";
import { Space } from "../space/Space";
import { Transaction } from "../transaction/Transaction";

export type User = {
  advertisments?: Array<Advertisment>;
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastLogin: Date;
  lastName: string | null;
  notifications?: Array<Notification>;
  phoneNumber: string | null;
  ratings?: Array<Rating>;
  roles: JsonValue;
  spaces?: Array<Space>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
