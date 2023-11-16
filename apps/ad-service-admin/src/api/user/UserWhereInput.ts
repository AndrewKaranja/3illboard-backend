import { AdvertismentListRelationFilter } from "../advertisment/AdvertismentListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { SpaceListRelationFilter } from "../space/SpaceListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  advertisments?: AdvertismentListRelationFilter;
  bookings?: BookingListRelationFilter;
  country?: StringNullableFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  kraPin?: StringNullableFilter;
  lastName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  phoneNumber?: StringNullableFilter;
  ratings?: RatingListRelationFilter;
  spaces?: SpaceListRelationFilter;
  status?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
