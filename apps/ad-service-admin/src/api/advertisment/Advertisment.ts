import { Space } from "../space/Space";
import { User } from "../user/User";

export type Advertisment = {
  adId: string | null;
  advertiserId: string | null;
  content: string | null;
  createdAt: Date;
  duration: string | null;
  id: string;
  space?: Space | null;
  updatedAt: Date;
  user?: User | null;
};
