import { Space as TSpace } from "../api/space/Space";

export const SPACE_TITLE_FIELD = "availability";

export const SpaceTitle = (record: TSpace): string => {
  return record.availability || String(record.id);
};
