import { AdvertismentUpdateManyWithoutUsersInput } from "./AdvertismentUpdateManyWithoutUsersInput";
import { BookingUpdateManyWithoutUsersInput } from "./BookingUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SpaceUpdateManyWithoutUsersInput } from "./SpaceUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  advertisments?: AdvertismentUpdateManyWithoutUsersInput;
  bookings?: BookingUpdateManyWithoutUsersInput;
  country?: string | null;
  email?: string;
  firstName?: string | null;
  kraPin?: string | null;
  lastLogin?: Date;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string | null;
  ratings?: RatingUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  spaces?: SpaceUpdateManyWithoutUsersInput;
  status?: string | null;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
};
