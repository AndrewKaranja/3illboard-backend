import { User } from "../user/User";

export type Notification = {
  content: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
  userId: string | null;
};
