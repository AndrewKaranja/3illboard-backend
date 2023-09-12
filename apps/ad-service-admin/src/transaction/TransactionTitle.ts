import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "advertiserId";

export const TransactionTitle = (record: TTransaction): string => {
  return record.advertiserId || String(record.id);
};
