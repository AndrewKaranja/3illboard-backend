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
  email: string;
  firstName?: string | null;
  lastLogin: Date;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber: string;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  spaces?: SpaceCreateNestedManyWithoutUsersInput;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
