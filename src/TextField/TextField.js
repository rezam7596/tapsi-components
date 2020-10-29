import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, InputBase, FormHelperText, InputAdornment, IconButton } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClearIcon from '@material-ui/icons/Clear';
import style from './TextField.scss';
import { removeNonNumbers, convertPersianNumberToEnglishNumber } from '../utils';
import { TextFieldThemes } from './constants';

const setValueOfEvent = (event, value) => {
  event.target.value = value;
  return event;
};

function TextField({
  value,
  onChange,
  onClear,
  title,
  helperText,
  loading,
  disabled,
  readonly,
  error,
  multiline,
  numeric,
  endAdornment,
  startAdornment,
  className,
  classes,
  theme,
  inputProps,
  isClearable,
  required,
  InputProps,
  InputLabelProps,
  ...restProps
}) {
  const [internalValue, setInternalValue] = React.useState(value);
  const [id] = React.useState(`text-field-${Math.floor(Math.random() * 10000000).toString()}`);
  const setValue = (event) => {
    const newValue = numeric ? removeNonNumbers(convertPersianNumberToEnglishNumber(event.target.value)) : event.target.value;
    setInternalValue(newValue);
    onChange(setValueOfEvent(event, newValue));
  };
  const clearValue = (event) => (onClear ? onClear(event) : setValue(setValueOfEvent(event, '')));
  return (
    <FormControl
      className={className}
      classes={{ root: 'shared-components-text-field' }}
      fullWidth
      disabled={disabled}
      error={error}
    >
      {title && (
        <InputLabel
          shrink
          htmlFor={id}
          classes={{ root: 'shared-components-text-field-label', error: 'shared-components-text-field-label-error' }}
          required={required}
        >
          {title}
        </InputLabel>
      )}
      <InputBase
        value={value !== undefined ? value : internalValue}
        onChange={setValue}
        inputProps={{ id, ...(inputProps || {}) }}
        {...InputProps}
        {...InputLabelProps}
        className="shared-input-base"
        classes={{
          ...classes,
          root: `shared-components-text-field-input-base-root ${classes.root || ''} ${theme}`,
          input: `shared-components-text-field-input-base-input ${classes.input || ''}`,
          focused: `shared-components-text-field-input-base-input-focused ${classes.focused || ''}`,
          error: `shared-components-text-field-input-base-root-error ${classes.error || ''}`,
          adornedStart: `shared-components-text-field-input-base-adornedStart ${classes.adornedStart || ''}`,
          adornedEnd: `shared-components-text-field-input-base-adornedEnd ${classes.adornedEnd || ''}`,
        }}
        readOnly={readonly}
        multiline={multiline}
        type={numeric ? 'tel' : 'text'}
        rows={3}
        {...(loading || endAdornment || isClearable
          ? {
              endAdornment: (
                <React.Fragment>
                  {loading && (
                    <InputAdornment position="end">
                      <CircularProgress color="inherit" size={20} />
                    </InputAdornment>
                  )}
                  {isClearable && (
                    <InputAdornment position="end">
                      <IconButton aria-label="clear field" onClick={clearValue} size="small">
                        <ClearIcon color="inherit" fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  )}
                  {endAdornment}
                  {(InputProps || {}).endAdornment}
                </React.Fragment>
              ),
            }
          : {})}
        {...(startAdornment
          ? {
              startAdornment: (
                <React.Fragment>
                  {startAdornment}
                  {(InputProps || {}).startAdornment}
                </React.Fragment>
              ),
            }
          : {})}
        {...restProps}
      />
      {helperText && <FormHelperText className="shared-components-text-field-helper-text">{helperText}</FormHelperText>}
    </FormControl>
  );
}

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  title: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.oneOf(Object.values(TextFieldThemes)),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  error: PropTypes.bool,
  multiline: PropTypes.bool,
  numeric: PropTypes.bool,
  endAdornment: PropTypes.any,
  startAdornment: PropTypes.any,
  inputProps: PropTypes.object,
  InputProps: PropTypes.object,
  InputLabelProps: PropTypes.object,
  isClearable: PropTypes.bool,
  required: PropTypes.bool,
};

TextField.defaultProps = {
  value: undefined,
  onChange: () => {},
  onClear: null,
  title: '',
  helperText: '',
  className: '',
  classes: {},
  theme: TextFieldThemes.THEME_1,
  loading: false,
  disabled: false,
  readonly: false,
  error: false,
  multiline: false,
  numeric: false,
  endAdornment: null,
  startAdornment: null,
  inputProps: null,
  InputProps: null,
  InputLabelProps: null,
  isClearable: false,
  required: false,
};

export default TextField;
