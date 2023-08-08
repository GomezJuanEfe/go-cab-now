/* eslint-disable import/prefer-default-export */
const toTitleCase = (str) => {
  const response = [];
  str.split(' ').forEach((item) => {
    response.push(item.charAt(0).toUpperCase() + item.slice(1));
  });
  return response.join(' ');
};

const parseQueryParameters = (url) => {
  const queryString = url.split('?')[1]; // Get the query string after the '?'
  const paramsArray = queryString.split('&'); // Split parameters into an array

  const paramsObject = {};

  paramsArray.forEach((param) => {
    const [key, value] = param.split('='); // Split parameter into key and value
    paramsObject[key] = decodeURIComponent(value); // Store parameter in object
  });

  return paramsObject;
};

const pagination = (arr, size) => {
  const result = [];
  let index = 0;

  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }

  return result;
};

export { toTitleCase, parseQueryParameters, pagination };
