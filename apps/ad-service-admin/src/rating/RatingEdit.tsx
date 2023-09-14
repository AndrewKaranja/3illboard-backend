import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SpaceTitle } from "../space/SpaceTitle";
import { UserTitle } from "../user/UserTitle";

export const RatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="advertiserID" source="advertiserId" />
        <TextInput label="comment" source="comment" />
        <NumberInput label="rating" source="rating" />
        <TextInput label="reviewID" source="reviewId" />
        <ReferenceInput source="space.id" reference="Space" label="Space">
          <SelectInput optionText={SpaceTitle} />
        </ReferenceInput>
        <TextInput label="spaceID" source="spaceId" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
