import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SpaceTitle } from "../space/SpaceTitle";
import { UserTitle } from "../user/UserTitle";

export const RatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="advertiserID" source="advertiserId" />
        <TextInput label="comment" source="comment" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="reviewID" source="reviewId" />
        <ReferenceInput source="space.id" reference="Space" label="Space">
          <SelectInput optionText={SpaceTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
