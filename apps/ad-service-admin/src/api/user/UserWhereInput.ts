import { AdvertismentListRelationFilter } from "../advertisment/AdvertismentListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { SpaceListRelationFilter } from "../space/SpaceListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  advertisments?: AdvertismentListRelationFilter;
  bookings?: BookingListRelationFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  ratings?: RatingListRelationFilter;
  spaces?: SpaceListRelationFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
