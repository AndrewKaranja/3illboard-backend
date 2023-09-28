import { SortOrder } from "../../util/SortOrder";

export type AdvertismentOrderByInput = {
  adId?: SortOrder;
  advertiserId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  spaceId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
