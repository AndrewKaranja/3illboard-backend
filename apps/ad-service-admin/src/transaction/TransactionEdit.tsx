import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
