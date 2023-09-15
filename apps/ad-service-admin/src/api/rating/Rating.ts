import { Space } from "../space/Space";
import { User } from "../user/User";

export type Rating = {
  advertiserId: string | null;
  comment: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  reviewId: string | null;
  space?: Space | null;
  updatedAt: Date;
  user?: User | null;
};
