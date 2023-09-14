import { AdvertismentCreateNestedManyWithoutSpacesInput } from "./AdvertismentCreateNestedManyWithoutSpacesInput";
import { InputJsonValue } from "../../types";
import { BookingCreateNestedManyWithoutSpacesInput } from "./BookingCreateNestedManyWithoutSpacesInput";
import { RatingCreateNestedManyWithoutSpacesInput } from "./RatingCreateNestedManyWithoutSpacesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SpaceCreateInput = {
  advertisments?: AdvertismentCreateNestedManyWithoutSpacesInput;
  availability?: InputJsonValue;
  bookings?: BookingCreateNestedManyWithoutSpacesInput;
  description?: string | null;
  dimensions: string;
  location?: string | null;
  ownerId?: string | null;
  photos?: InputJsonValue;
  price?: number | null;
  ratings?: RatingCreateNestedManyWithoutSpacesInput;
  spaceId: string;
  spaceType?: string | null;
  user?: UserWhereUniqueInput | null;
};
