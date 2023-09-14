import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SPACE_TITLE_FIELD } from "../space/SpaceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AdvertismentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Advertisments"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="spaceID" source="spaceId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
