import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import carData from './data';
import { parseQueryParameters, pagination } from './utils';

export const mockInstance = axios.create();

export const carsMock = new MockAdapter(mockInstance);

/* Data paginated */

const carDataPaginated = pagination(carData, 5);

/* Routes data mock */
const usersUri = '/cars';
const url = new RegExp(`${usersUri}/*`);

carsMock.onGet(url).reply((config) => {
  const { page, filterBar, carOption } = parseQueryParameters(config.url, ['type', 'starCategory', 'priceRange', 'carOption', 'capacity']);
  const dataFilteredAndPaginated = pagination(carData.filter((item) => {
    const searchBar = filterBar || '';
    return item.car_name.toLowerCase().includes(searchBar.toLowerCase())
      || item.car_type.toLowerCase().includes(filterBar?.toLowerCase());
  }), 5);
    // item.car_details.transmition.toLowerCase().includes(carOption);
  console.log(dataFilteredAndPaginated[page - 1] || []);
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
