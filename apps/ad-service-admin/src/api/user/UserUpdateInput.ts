import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastLogin?: Date;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
