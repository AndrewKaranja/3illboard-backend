import { SortOrder } from "../../util/SortOrder";

export type SpaceOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dimensions?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  ownerId?: SortOrder;
  photos?: SortOrder;
  price?: SortOrder;
  spaceId?: SortOrder;
  spaceType?: SortOrder;
  updatedAt?: SortOrder;
};
