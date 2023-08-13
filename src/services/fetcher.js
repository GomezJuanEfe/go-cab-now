import { mockInstance } from './axios';

export const fetcher = (url) => mockInstance.get(url).then((res) => res.data);
