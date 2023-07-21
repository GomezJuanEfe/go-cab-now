/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import './DatePicker.scss';

const DatePicker = () => (
  <div className="date-picker">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker defaultValue={dayjs()} />
    </LocalizationProvider>
  </div>
);

export default DatePicker;
