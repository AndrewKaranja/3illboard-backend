import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adID" source="adId" />
        <TextInput label="advertiserID" source="advertiserId" />
        <TextInput label="bookingID" source="bookingId" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="spaceID" source="spaceId" />
        <DateTimeInput label="startDate" source="startDate" />
        <NumberInput label="totalPrice" source="totalPrice" />
      </SimpleForm>
    </Create>
  );
};
