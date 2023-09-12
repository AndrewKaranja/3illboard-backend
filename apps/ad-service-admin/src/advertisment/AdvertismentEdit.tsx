import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdvertismentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="adID" source="adId" />
        <TextInput label="advertiserID" source="advertiserId" />
        <TextInput label="content" source="content" />
        <TextInput label="duration" source="duration" />
        <TextInput label="spaceID" source="spaceId" />
      </SimpleForm>
    </Edit>
  );
};
