import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdvertismentCreateInput = {
  adId?: string | null;
  advertiserId?: string | null;
  content?: string | null;
  duration?: string | null;
  space?: SpaceWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
