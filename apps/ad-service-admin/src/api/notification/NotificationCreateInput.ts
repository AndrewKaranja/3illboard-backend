import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  content?: string | null;
  date?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
