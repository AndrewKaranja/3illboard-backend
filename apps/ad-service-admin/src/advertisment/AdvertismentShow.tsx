import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SPACE_TITLE_FIELD } from "../space/SpaceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AdvertismentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
