import { Space as TSpace } from "../api/space/Space";

export const SPACE_TITLE_FIELD = "spaceTitle";

export const SpaceTitle = (record: TSpace): string => {
  return record.spaceTitle?.toString() || String(record.id);
};
