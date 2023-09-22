import { Space as TSpace } from "../api/space/Space";

export const SPACE_TITLE_FIELD = "dimensions";

export const SpaceTitle = (record: TSpace): string => {
  return record.dimensions?.toString() || String(record.id);
};
