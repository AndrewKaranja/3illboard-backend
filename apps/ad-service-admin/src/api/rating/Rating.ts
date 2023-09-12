export type Rating = {
  advertiserId: string | null;
  comment: string | null;
  createdAt: Date;
  id: string;
  rating?: Rating | null;
  ratings?: Array<Rating>;
  reviewId: string | null;
  spaceId: string | null;
  updatedAt: Date;
};
