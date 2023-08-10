import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import carData from './data';
import { parseQueryParameters, pagination } from './utils';

export const mockInstance = axios.create();

export const carsMock = new MockAdapter(mockInstance);

/* Data paginated */

const carDataPaginated = pagination(carData, 6);

/* Routes data mock */
const usersUri = '/cars';
const url = new RegExp(`${usersUri}/*`);

carsMock.onGet(url).reply((config) => {
  console.log(config.url);
  const { page } = parseQueryParameters(config.url);
  return [
    200,
    {
      info: {
        pages: carDataPaginated.length,
      },
      result: carDataPaginated[page - 1],
    },
  ];
});
