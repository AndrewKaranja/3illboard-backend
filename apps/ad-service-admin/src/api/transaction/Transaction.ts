export type Transaction = {
  advertiserId: string | null;
  amount: string | null;
  bookingId: string | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  transactionDate: Date | null;
  transactionId: string | null;
  updatedAt: Date;
};
