export type TransactionCreateInput = {
  advertiserId?: string | null;
  amount?: string | null;
  bookingId?: string | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  transactionId?: string | null;
};
