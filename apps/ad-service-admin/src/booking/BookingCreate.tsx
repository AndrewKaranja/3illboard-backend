import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SpaceTitle } from "../space/SpaceTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { UserTitle } from "../user/UserTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adID" source="adId" />
        <TextInput label="advertiserID" source="advertiserId" />
        <TextInput label="bookingID" source="bookingId" />
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput source="space.id" reference="Space" label="Space">
          <SelectInput optionText={SpaceTitle} />
        </ReferenceInput>
        <TextInput label="spaceID" source="spaceId" />
        <DateTimeInput label="startDate" source="startDate" />
        <NumberInput label="totalPrice" source="totalPrice" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
