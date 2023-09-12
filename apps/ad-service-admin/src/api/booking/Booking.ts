export type Booking = {
  adId: string | null;
  advertiserId: string | null;
  bookingId: string | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  spaceId: string | null;
  startDate: Date | null;
  totalPrice: number | null;
  updatedAt: Date;
};
