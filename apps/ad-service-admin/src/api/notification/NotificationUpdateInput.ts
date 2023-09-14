import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  content?: string | null;
  date?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  userId?: string | null;
};
