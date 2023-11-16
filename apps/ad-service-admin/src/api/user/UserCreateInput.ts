import { AdvertismentCreateNestedManyWithoutUsersInput } from "./AdvertismentCreateNestedManyWithoutUsersInput";
import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SpaceCreateNestedManyWithoutUsersInput } from "./SpaceCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  advertisments?: AdvertismentCreateNestedManyWithoutUsersInput;
  bookings?: BookingCreateNestedManyWithoutUsersInput;
  country?: string | null;
  email: string;
  firstName?: string | null;
  kraPin?: string | null;
  lastLogin: Date;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber?: string | null;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  spaces?: SpaceCreateNestedManyWithoutUsersInput;
  status?: string | null;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
