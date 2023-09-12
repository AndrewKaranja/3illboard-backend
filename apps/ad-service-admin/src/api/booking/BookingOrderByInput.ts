import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  adId?: SortOrder;
  advertiserId?: SortOrder;
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  spaceId?: SortOrder;
  startDate?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
