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
  spaceContact?: SortOrder;
  spaceId?: SortOrder;
  spaceType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
