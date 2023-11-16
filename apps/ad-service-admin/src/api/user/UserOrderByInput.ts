import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  kraPin?: SortOrder;
  lastLogin?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  roles?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
