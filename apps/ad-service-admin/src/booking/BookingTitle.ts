import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "adId";

export const BookingTitle = (record: TBooking): string => {
  return record.adId?.toString() || String(record.id);
};
