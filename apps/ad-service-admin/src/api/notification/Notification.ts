export type Notification = {
  content: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  notificationId: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
  userId: string | null;
};
