import { AdvertismentUpdateManyWithoutSpacesInput } from "./AdvertismentUpdateManyWithoutSpacesInput";
import { InputJsonValue } from "../../types";
import { BookingUpdateManyWithoutSpacesInput } from "./BookingUpdateManyWithoutSpacesInput";
import { RatingUpdateManyWithoutSpacesInput } from "./RatingUpdateManyWithoutSpacesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SpaceUpdateInput = {
  advertisments?: AdvertismentUpdateManyWithoutSpacesInput;
  availability?: InputJsonValue;
  bookings?: BookingUpdateManyWithoutSpacesInput;
  description?: string | null;
  dimensions?: string;
  location?: string | null;
  ownerId?: string | null;
  photos?: InputJsonValue;
  price?: number | null;
  ratings?: RatingUpdateManyWithoutSpacesInput;
  spaceContact?: string | null;
  spaceId?: string;
  spaceType?: string | null;
  user?: UserWhereUniqueInput | null;
};
