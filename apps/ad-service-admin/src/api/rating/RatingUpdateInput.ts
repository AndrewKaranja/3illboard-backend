import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingUpdateInput = {
  advertiserId?: string | null;
  comment?: string | null;
  rating?: number | null;
  reviewId?: string | null;
  space?: SpaceWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
