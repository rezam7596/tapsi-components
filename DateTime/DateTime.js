import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import moment from 'moment-jalaali';
import { Popover } from '@material-ui/core';
import Calendar from './ReactDatePicker2--customized';
import { convertEnglishNumberToPersianNumber } from '../utils';
import style from './DateTime.scss';
import TextField from '../TextField/TextField';

moment.loadPersian({ usePersianDigits: false, dialect: 'persian-modern' });

function DateTime(props) {
  const [internalValue, setInternalValue] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {
    className,
    readonly,
    isGregorian,
    value,
    timePickerEnabledFormat,
    timePickerDisabledFormat,
    endAdornment,
    onChange,
    disabled,
    min,
    max,
    removeDateEnabled,
    timePickerEnabled,
    showTodayButton,
    showToggleCalenderTypeButton,
    ranges,
    onClear,
    ...restProps
  } = props;
  const computedValue = value !== undefined ? value : internalValue;
  return (
    <div className={`rjf-datepicker ${className}`}>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ horizontal: isGregorian ? 'left' : 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: isGregorian ? 'left' : 'right', vertical: 'top' }}
      >
        <Calendar
          isGregorian={isGregorian}
          value={computedValue && moment(computedValue)}
          onChange={(newValue) => {
            if (!newValue) {
              setInternalValue(null);
              onChange(null);
              setAnchorEl(null);
            } else if (!moment(newValue).isSame(computedValue)) {
              setInternalValue(new Date(newValue));
              onChange(new Date(newValue));
              setAnchorEl(null);
            }
          }}
          disabled={disabled || readonly}
          timePicker={timePickerEnabled}
          min={min && moment(min)}
          max={max && moment(max)}
          ranges={ranges && ranges.map((range) => ({ ...range, start: moment(range.start), end: moment(range.end) }))}
          showTodayButton={showTodayButton}
          showToggleButton={showToggleCalenderTypeButton}
        />
      </Popover>
      <TextField
        {...restProps}
        readonly
        disabled={disabled}
        onClick={(e) => !(disabled || readonly) && setAnchorEl(e.currentTarget)}
        value={
          (computedValue || '') &&
          (isGregorian
            ? moment(computedValue).format(timePickerEnabled ? timePickerEnabledFormat : timePickerDisabledFormat)
            : convertEnglishNumberToPersianNumber(
                moment(computedValue).format(timePickerEnabled ? timePickerEnabledFormat : timePickerDisabledFormat),
              ))
        }
        isClearable={removeDateEnabled}
        onClear={(e) => {
          setInternalValue(null);
          if (onClear) {
            onClear(e);
          } else {
            onChange(null);
          }
          e.stopPropagation();
        }}
      />
    </div>
  );
}

DateTime.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  isGregorian: PropTypes.bool,
  readonly: PropTypes.bool,
  timePickerEnabledFormat: PropTypes.string,
  timePickerDisabledFormat: PropTypes.string,
  timePickerEnabled: PropTypes.bool,
  removeDateEnabled: PropTypes.bool,
  endAdornment: PropTypes.node,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  ranges: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      color: PropTypes.string,
      start: PropTypes.instanceOf(Date).isRequired,
      end: PropTypes.instanceOf(Date).isRequired,
    }),
  ),
  onClear: PropTypes.func,
  showTodayButton: PropTypes.bool,
  showToggleCalenderTypeButton: PropTypes.bool,
};

DateTime.defaultProps = {
  className: '',
  onChange: () => {},
  onClear: null,
  value: undefined,
  disabled: false,
  isGregorian: false,
  readonly: false,
  timePickerEnabledFormat: 'jYYYY/jM/jD HH:mm',
  timePickerDisabledFormat: 'jYYYY/jM/jD',
  timePickerEnabled: true,
  removeDateEnabled: false,
  endAdornment: undefined,
  min: undefined,
  max: undefined,
  ranges: [],
  showTodayButton: true,
  showToggleCalenderTypeButton: false,
};

export default withStyles(style)(DateTime);
