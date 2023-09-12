import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastLogin: Date;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
