import { DateTimePicker } from '@mantine/dates';
import { createStyles, rem } from '@mantine/core';
import dayjs from 'dayjs';
import './DatePicker.scss';

const now = dayjs().format('MM/DD/YYYY hh:mm');

const useStyles = createStyles(() => ({
  root: {
    fontFamily: 'nunito',
  },
  wrapper: {
    backgroundColor: 'white',
    padding: '10px',
    outlineWidth: '1px',
    outlineColor: '#a1a1a1',
    outlineStyle: 'solid',
  },
  calendar: {
    fontSize: rem(30),
  },
  input: {
    color: 'red',
  },
}));

const DatePicker = ({
  title, inpName, modal, handleInput,
}) => {
  const { classes } = useStyles();
  const modalStyle = modal ? 'modal' : '';

  return (
    <div className={`label-input ${modalStyle}`}>
      <label htmlFor={inpName}>
        <div>{title}</div>
        <DateTimePicker
          id={inpName}
          classNames={{ ...classes }}
          dropdownType="modal"
          placeholder={now}
          maw="auto"
          mx="auto"
          onChange={(e) => handleInput(e, true, inpName)}
        />
      </label>
    </div>
  );
};

export default DatePicker;
