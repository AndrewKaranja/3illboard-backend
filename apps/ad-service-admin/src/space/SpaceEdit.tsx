import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SpaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
