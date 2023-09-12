import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RATING_TITLE_FIELD } from "./RatingTitle";

export const RatingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="advertiserID" source="advertiserId" />
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="rating" source="rating.id" reference="Rating">
          <TextField source={RATING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="reviewID" source="reviewId" />
        <TextField label="spaceID" source="spaceId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Rating"
          target="ratingId"
          label="Ratings"
        >
          <Datagrid rowClick="show">
            <TextField label="advertiserID" source="advertiserId" />
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="rating"
              source="rating.id"
              reference="Rating"
            >
              <TextField source={RATING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="reviewID" source="reviewId" />
            <TextField label="spaceID" source="spaceId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
