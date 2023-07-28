/* eslint-disable import/prefer-default-export */
const toTitleCase = (str) => {
  const response = [];
  str.split(' ').forEach((item) => {
    response.push(item.charAt(0).toUpperCase() + item.slice(1));
  });
  return response.join(' ');
};

export { toTitleCase };
