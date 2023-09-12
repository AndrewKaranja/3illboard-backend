import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RatingTitle } from "./RatingTitle";

export const RatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="advertiserID" source="advertiserId" />
        <TextInput label="comment" source="comment" />
        <ReferenceInput source="rating.id" reference="Rating" label="rating">
          <SelectInput optionText={RatingTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <TextInput label="reviewID" source="reviewId" />
        <TextInput label="spaceID" source="spaceId" />
      </SimpleForm>
    </Create>
  );
};
