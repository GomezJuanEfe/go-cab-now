/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import './DatePicker.scss';

const DatePicker = () => (
  <div className="date-picker">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        defaultValue={dayjs()}
        label="customPlaceholder"
      />
    </LocalizationProvider>
  </div>
);

export default DatePicker;
