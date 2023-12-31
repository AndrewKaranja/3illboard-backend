import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SPACE_TITLE_FIELD } from "./SpaceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SpaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="availability" source="availability" />
        <TextField label="bookingFee" source="bookingFee" />
        <TextField label="country" source="country" />
        <TextField label="county" source="county" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="dimensions" source="dimensions" />
        <TextField label="distanceToGround" source="distanceToGround" />
        <BooleanField label="facingRoad" source="facingRoad" />
        <TextField label="farthestVisibility" source="farthestVisibility" />
        <TextField label="ID" source="id" />
        <TextField label="landmark" source="landmark" />
        <TextField label="legalDocs" source="legalDocs" />
        <TextField label="location" source="location" />
        <TextField label="maintenanceCharge" source="maintenanceCharge" />
        <TextField label="maintenanceInterval" source="maintenanceInterval" />
        <TextField label="minListingPeriod" source="minListingPeriod" />
        <TextField label="ownerID" source="ownerId" />
        <TextField label="photos" source="photos" />
        <TextField label="price" source="price" />
        <TextField label="pricingPeriod" source="pricingPeriod" />
        <TextField label="showPriceAs" source="showPriceAs" />
        <TextField label="spaceContact" source="spaceContact" />
        <TextField label="spaceFeatures" source="spaceFeatures" />
        <TextField label="spaceID" source="spaceId" />
        <TextField label="spaceRestrictions" source="spaceRestrictions" />
        <TextField label="spaceTitle" source="spaceTitle" />
        <TextField label="spaceType" source="spaceType" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="visibleAtNight" source="visibleAtNight" />
        <ReferenceManyField
          reference="Advertisment"
          target="spaceId"
          label="Advertisments"
        >
          <Datagrid rowClick="show">
            <TextField label="adID" source="adId" />
            <TextField label="advertiserID" source="advertiserId" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration" source="duration" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Space" source="space.id" reference="Space">
              <TextField source={SPACE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Booking"
          target="spaceId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="adID" source="adId" />
            <TextField label="advertiserID" source="advertiserId" />
            <TextField label="bookingID" source="bookingId" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Space" source="space.id" reference="Space">
              <TextField source={SPACE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startDate" source="startDate" />
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Rating" target="spaceId" label="Ratings">
          <Datagrid rowClick="show">
            <TextField label="advertiserID" source="advertiserId" />
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="rating" source="rating" />
            <TextField label="reviewID" source="reviewId" />
            <ReferenceField label="Space" source="space.id" reference="Space">
              <TextField source={SPACE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
