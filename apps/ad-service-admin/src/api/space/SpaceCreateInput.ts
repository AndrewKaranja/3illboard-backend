export type SpaceCreateInput = {
  availability?: string | null;
  description?: string | null;
  dimensions: string;
  location?: string | null;
  ownerId?: string | null;
  photos?: string | null;
  price?: number | null;
  spaceId: string;
  spaceType?: string | null;
};
