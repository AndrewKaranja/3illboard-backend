import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdvertismentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adID" source="adId" />
        <TextInput label="advertiserID" source="advertiserId" />
        <TextInput label="content" source="content" />
        <TextInput label="duration" source="duration" />
        <TextInput label="spaceID" source="spaceId" />
      </SimpleForm>
    </Create>
  );
};
