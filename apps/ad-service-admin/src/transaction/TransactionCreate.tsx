import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="advertiserID" source="advertiserId" />
        <TextInput label="amount" source="amount" />
        <TextInput label="bookingID" source="bookingId" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <TextInput label="transactionID" source="transactionId" />
      </SimpleForm>
    </Create>
  );
};
