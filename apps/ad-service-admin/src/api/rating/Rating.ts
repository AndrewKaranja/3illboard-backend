import { Decimal } from "decimal.js";
import { Space } from "../space/Space";
import { User } from "../user/User";

export type Rating = {
  advertiserId: string | null;
  comment: string | null;
  createdAt: Date;
  id: string;
  rating: Decimal | null;
  reviewId: string | null;
  space?: Space | null;
  spaceId: string | null;
  updatedAt: Date;
  user?: User | null;
};
