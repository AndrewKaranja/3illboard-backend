import { Advertisment } from "../advertisment/Advertisment";
import { JsonValue } from "type-fest";
import { Booking } from "../booking/Booking";
import { Rating } from "../rating/Rating";
import { User } from "../user/User";

export type Space = {
  advertisments?: Array<Advertisment>;
  availability: JsonValue;
  bookingFee: string | null;
  bookings?: Array<Booking>;
  country: string | null;
  county: string | null;
  createdAt: Date;
  description: string | null;
  dimensions: string;
  distanceToGround: string | null;
  facingRoad: boolean | null;
  farthestVisibility: string | null;
  id: string;
  landmark: string | null;
  legalDocs: JsonValue;
  location: string | null;
  maintenanceCharge: string | null;
  maintenanceInterval: string | null;
  minBookingPeriod: string | null;
  ownerId: string | null;
  photos: JsonValue;
  price: number | null;
  pricingPeriod: string | null;
  ratings?: Array<Rating>;
  showPriceAs: string | null;
  spaceContact: string | null;
  spaceFeatures: JsonValue;
  spaceId: string;
  spaceRestrictions: string | null;
  spaceTitle: string | null;
  spaceType: string | null;
  updatedAt: Date;
  user?: User | null;
  visibleAtNight: boolean | null;
};
