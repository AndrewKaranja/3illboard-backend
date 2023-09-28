import { Advertisment as TAdvertisment } from "../api/advertisment/Advertisment";

export const ADVERTISMENT_TITLE_FIELD = "adId";

export const AdvertismentTitle = (record: TAdvertisment): string => {
  return record.adId?.toString() || String(record.id);
};
