import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdvertismentTitle } from "../advertisment/AdvertismentTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { RatingTitle } from "../rating/RatingTitle";
import { UserTitle } from "../user/UserTitle";

export const SpaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <TextInput label="bookingFee" source="bookingFee" />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="country" source="country" />
        <TextInput label="county" source="county" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="dimensions" source="dimensions" />
        <TextInput label="distanceToGround" source="distanceToGround" />
        <BooleanInput label="facingRoad" source="facingRoad" />
        <TextInput label="farthestVisibility" source="farthestVisibility" />
        <TextInput label="landmark" source="landmark" />
        <div />
        <TextInput label="location" source="location" />
        <TextInput label="maintenanceCharge" source="maintenanceCharge" />
        <TextInput label="maintenanceInterval" source="maintenanceInterval" />
        <TextInput label="minBookingPeriod" source="minBookingPeriod" />
        <TextInput label="ownerID" source="ownerId" />
        <div />
        <NumberInput label="price" source="price" />
        <TextInput label="pricingPeriod" source="pricingPeriod" />
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <TextInput label="showPriceAs" source="showPriceAs" />
        <TextInput label="spaceContact" source="spaceContact" />
        <div />
        <TextInput label="spaceID" source="spaceId" />
        <TextInput label="spaceRestrictions" source="spaceRestrictions" />
        <TextInput label="spaceTitle" source="spaceTitle" />
        <TextInput label="spaceType" source="spaceType" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <BooleanInput label="visibleAtNight" source="visibleAtNight" />
      </SimpleForm>
    </Edit>
  );
};
