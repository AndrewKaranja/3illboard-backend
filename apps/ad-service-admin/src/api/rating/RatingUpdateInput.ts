import { Decimal } from "decimal.js";
import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingUpdateInput = {
  advertiserId?: string | null;
  comment?: string | null;
  rating?: Decimal | null;
  reviewId?: string | null;
  space?: SpaceWhereUniqueInput | null;
  spaceId?: string | null;
  user?: UserWhereUniqueInput | null;
};
