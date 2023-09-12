import { AdvertismentWhereInput } from "./AdvertismentWhereInput";
import { AdvertismentOrderByInput } from "./AdvertismentOrderByInput";

export type AdvertismentFindManyArgs = {
  where?: AdvertismentWhereInput;
  orderBy?: Array<AdvertismentOrderByInput>;
  skip?: number;
  take?: number;
};
