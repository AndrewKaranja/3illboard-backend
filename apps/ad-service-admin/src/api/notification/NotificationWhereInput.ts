import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NotificationWhereInput = {
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  notificationId?: StringNullableFilter;
  status?: "Option1";
  userId?: StringNullableFilter;
};
