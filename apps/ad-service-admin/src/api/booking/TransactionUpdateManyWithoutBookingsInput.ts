import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionUpdateManyWithoutBookingsInput = {
  connect?: Array<TransactionWhereUniqueInput>;
  disconnect?: Array<TransactionWhereUniqueInput>;
  set?: Array<TransactionWhereUniqueInput>;
};
