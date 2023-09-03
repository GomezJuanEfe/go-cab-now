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

const inputFechaHora = '2023-08-29T19:30:00.000Z';
const outputFechaHora = datePickerFormat(inputFechaHora);
console.log(outputFechaHora);

/* Esta función utiliza el objeto Date de JavaScript para analizar la fecha y hora de entrada proporcionada. Luego, utiliza el método toLocaleString para formatear la fecha y hora según las opciones especificadas, que coinciden con el formato de salida deseado.

Recuerda que el resultado puede variar según la configuración regional del navegador o del entorno en el que se ejecute el código.
 */

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

const inputDateString = '2023-08-28T14:00:00.000Z';
const formattedOutput = formatTableDate(inputDateString);
console.log(formattedOutput);
