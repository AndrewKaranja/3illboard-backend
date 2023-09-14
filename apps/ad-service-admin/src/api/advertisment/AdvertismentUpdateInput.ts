import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdvertismentUpdateInput = {
  adId?: string | null;
  advertiserId?: string | null;
  content?: string | null;
  duration?: string | null;
  space?: SpaceWhereUniqueInput | null;
  spaceId?: string | null;
  user?: UserWhereUniqueInput | null;
};
