export function pickerDateToDateFormat(dateString) {
  const date = new Date(dateString);
  const isoFormat = date.toISOString();
  return isoFormat;
}

export function dateToBookingDate(dateString) {
  const bookingDate = dateString.slice(0, 11);
  return bookingDate;
}
