import { Advertisment } from "../advertisment/Advertisment";
import { JsonValue } from "type-fest";
import { Booking } from "../booking/Booking";
import { Rating } from "../rating/Rating";
import { User } from "../user/User";

export type Space = {
  advertisments?: Array<Advertisment>;
  availability: JsonValue;
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  dimensions: string;
  id: string;
  location: string | null;
  ownerId: string | null;
  photos: JsonValue;
  price: number | null;
  ratings?: Array<Rating>;
  spaceContact: string | null;
  spaceId: string;
  spaceType: string | null;
  updatedAt: Date;
  user?: User | null;
};
