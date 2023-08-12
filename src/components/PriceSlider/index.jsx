import './PriceSlider.scss';
import { RangeSlider, createStyles, rem } from '@mantine/core';

const valueLabelFormat = (number) => {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };
  return new Intl.NumberFormat('en-US', options).format(number);
};

const useStyles = createStyles(() => {
  const yellow = '#e9b30e';
  return ({
    bar: {
      backgroundColor: yellow,
    },
    thumb: {
      height: rem(20),
      borderColor: yellow,
      backgroundColor: yellow,
    },
    label: {
      fontWeight: '600',
      backgroundColor: 'transparent',
      color: 'black',
      top: rem(-40),
      fontSize: rem(20),
    },
  });
});

const PriceSlider = ({ priceValues, setPriceValues }) => {
  const { classes } = useStyles();
  return (
    <div className="slider-container">
      <RangeSlider
        size="md"
        classNames={{ ...classes }}
        labelAlwaysOn
        label={valueLabelFormat}
        max={1500}
        value={priceValues}
        onChange={(e) => setPriceValues({
          target: {
            value: e,
            name: 'priceRange',
            type: 'custom',
          },
        })}
      />
    </div>
  );
};

export default PriceSlider;
