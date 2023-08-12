/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import carData from './data';
import { parseQueryParameters, pagination } from './utils';

export const mockInstance = axios.create();

export const carsMock = new MockAdapter(mockInstance);

/* Routes data mock */
const usersUri = '/cars';
const url = new RegExp(`${usersUri}/*`);

carsMock.onGet(url).reply((config) => {
  const {
    page, filterBar, carOption, type,
  } = parseQueryParameters(config.url, ['type', 'starCategory', 'priceRange', 'carOption', 'capacity']);
  const dataFilteredAndPaginated = pagination(carData.filter((item) => (
    (!filterBar || (item.car_name.toLowerCase().includes(filterBar.toLowerCase())
    || item.car_type.toLowerCase().includes(filterBar?.toLowerCase())))
    && (!carOption || (!carOption[0] || carOption.includes(item.car_details.transmition)))
    && (!type || (!type[0] || type.includes(item.car_type)))
  )), 5);
  return [
    200,
    {
      info: {
        pages: dataFilteredAndPaginated.length,
      },
      result: dataFilteredAndPaginated[page - 1] || [],
    },
  ];
});
