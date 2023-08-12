/* eslint-disable no-restricted-syntax */
const toTitleCase = (str) => {
  const response = [];
  str.split(' ').forEach((item) => {
    response.push(item.charAt(0).toUpperCase() + item.slice(1));
  });
  return response.join(' ');
};

const parseQueryParameters = (url, toArrParmas) => {
  const queryString = url.split('?')[1]; // Get the query string after the '?'
  const paramsArray = queryString.split('&'); // Split parameters into an array

  let paramsObject = {};

  paramsArray.forEach((param) => {
    const [key, value] = param.split('='); // Split parameter into key and value
    paramsObject[key] = decodeURIComponent(value); // Store parameter in object
  });

  toArrParmas?.forEach((item) => {
    paramsObject = { ...paramsObject, [item]: paramsObject[item]?.split(',') };
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

const buildQueryString = (params) => {
  const queryParams = [];

  for (const key in params) {
    if (Array.isArray(params[key])) {
      queryParams.push(`${key}=${params[key].join(',')}`);
    } else {
      queryParams.push(`${key}=${params[key]}`);
    }
  }

  return queryParams.join('&');
};

export {
  toTitleCase, parseQueryParameters, pagination, buildQueryString,
};
