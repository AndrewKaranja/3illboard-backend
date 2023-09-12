import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SpaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="availability" source="availability" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="dimensions" source="dimensions" />
        <TextInput label="location" source="location" />
        <TextInput label="ownerID" source="ownerId" />
        <TextInput label="photos" source="photos" />
        <NumberInput label="price" source="price" />
        <TextInput label="spaceID" source="spaceId" />
        <TextInput label="spaceType" source="spaceType" />
      </SimpleForm>
    </Create>
  );
};
