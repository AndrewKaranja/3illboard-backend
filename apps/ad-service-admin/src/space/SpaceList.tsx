import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SpaceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Spaces"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="availability" source="availability" />
        <TextField label="bookingFee" source="bookingFee" />
        <TextField label="bookingStage" source="bookingStage" />
        <TextField label="country" source="country" />
        <TextField label="county" source="county" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="dimensions" source="dimensions" />
        <TextField label="distanceToGround" source="distanceToGround" />
        <BooleanField label="facingRoad" source="facingRoad" />
        <TextField label="farthestVisibility" source="farthestVisibility" />
        <TextField label="ID" source="id" />
        <BooleanField label="isOccupied" source="isOccupied" />
        <TextField label="landmark" source="landmark" />
        <TextField label="legalDocs" source="legalDocs" />
        <TextField label="location" source="location" />
        <TextField label="maintenanceCharge" source="maintenanceCharge" />
        <TextField label="maintenanceInterval" source="maintenanceInterval" />
        <TextField label="minBookingPeriod" source="minBookingPeriod" />
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
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="visibleAtNight" source="visibleAtNight" />
      </Datagrid>
    </List>
  );
};
