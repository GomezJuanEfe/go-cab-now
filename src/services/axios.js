import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mockInstance = axios.create();

export const carsMock = new MockAdapter(mockInstance);

/* Routes data mock */
carsMock.onGet('/cars').reply(
  200,
  [
    {
      car_id: 1,
      car_name: 'Peugeot Citroen',
      car_type: 'Sedan',
      car_img: '../../src/assets/images/5.png',
      car_details: {
        seats: 5,
        luggage: 2,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
    {
      car_id: 2,
      car_name: 'Suzuki',
      car_type: 'Medium',
      car_img: '../../src/assets/images/6.png',
      car_details: {
        seats: 5,
        luggage: 2,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
    {
      car_id: 3,
      car_name: 'Fiat Chrysler',
      car_type: 'Mini',
      car_img: '../../src/assets/images/7.png',
      car_details: {
        seats: 5,
        luggage: 2,
        air_conditioner: false,
        transmition: 'Mechanic',
      },
      fare_km: 25,
    },
    {
      car_id: 4,
      car_name: 'Honda',
      car_type: 'Standard',
      car_img: '../../src/assets/images/8.png',
      car_details: {
        seats: 5,
        luggage: 2,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
    {
      car_id: 5,
      car_name: 'Ford',
      car_type: 'Tempo Travel',
      car_img: '../../src/assets/images/9.png',
      car_details: {
        seats: 9,
        luggage: 4,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
    {
      car_id: 6,
      car_name: 'Hyundai-Kia',
      car_type: 'SUV',
      car_img: '../../src/assets/images/10.png',
      car_details: {
        seats: 5,
        luggage: 4,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
    {
      car_id: 7,
      car_name: 'General Motors',
      car_type: 'Luxury',
      car_img: '../../src/assets/images/11.png',
      car_details: {
        seats: 2,
        luggage: 2,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
    {
      car_id: 8,
      car_name: 'Tesla Model 3',
      car_type: 'Electric Sedan',
      car_img: '../../src/assets/images/12.png',
      car_details: {
        seats: 5,
        luggage: 2,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
    {
      car_id: 9,
      car_name: 'BMW i4',
      car_type: 'Electric Sedan',
      car_img: '../../src/assets/images/13.png',
      car_details: {
        seats: 5,
        luggage: 2,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
    {
      car_id: 10,
      car_name: 'Renault Kwid',
      car_type: 'Hatchback',
      car_img: '../../src/assets/images/14.png',
      car_details: {
        seats: 5,
        luggage: 1,
        air_conditioner: true,
        transmition: 'Mechanic',
      },
      fare_km: 25,
    },
    {
      car_id: 11,
      car_name: 'Seat Leon',
      car_type: 'Hatchback',
      car_img: '../../src/assets/images/15.png',
      car_details: {
        seats: 5,
        luggage: 1,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
    {
      car_id: 12,
      car_name: 'Volkswagen Transporter',
      car_type: 'Hatchback',
      car_img: '../../src/assets/images/16.png',
      car_details: {
        seats: 9,
        luggage: 4,
        air_conditioner: true,
        transmition: 'Automatic',
      },
      fare_km: 25,
    },
  ],
);
