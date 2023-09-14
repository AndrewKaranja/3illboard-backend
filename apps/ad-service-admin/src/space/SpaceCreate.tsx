import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdvertismentTitle } from "../advertisment/AdvertismentTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { RatingTitle } from "../rating/RatingTitle";
import { UserTitle } from "../user/UserTitle";

export const SpaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="advertisments"
          reference="Advertisment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdvertismentTitle} />
        </ReferenceArrayInput>
        <div />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="dimensions" source="dimensions" />
        <TextInput label="location" source="location" />
        <TextInput label="ownerID" source="ownerId" />
        <div />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <TextInput label="spaceID" source="spaceId" />
        <TextInput label="spaceType" source="spaceType" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
