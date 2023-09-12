import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SpaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="availability" source="availability" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="dimensions" source="dimensions" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="ownerID" source="ownerId" />
        <TextField label="photos" source="photos" />
        <TextField label="price" source="price" />
        <TextField label="spaceID" source="spaceId" />
        <TextField label="spaceType" source="spaceType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
