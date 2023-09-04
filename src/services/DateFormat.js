export function pickerDateToDateFormat(dateString) {
  const date = new Date(dateString);
  const isoFormat = date.toISOString();
  return isoFormat;
}

export function datePickerFormat(input) {
  const inputDate = new Date(input);
  const opciones = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };

  const formattedDate = inputDate.toLocaleString('en-US', opciones);
  return formattedDate;
}

export function formatTableDate(inputDate) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
  return formattedDate;
}
