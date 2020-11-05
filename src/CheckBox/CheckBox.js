import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MuiCheckBox, FormControlLabel } from '@material-ui/core';
import style from './CheckBox.scss';
import * as constants from './constants';

function CheckBox({ label, className, theme, disabled, ...restProps }) {
  return (
    <FormControlLabel
      disabled={disabled}
      className={`shared-component-check-box ${disabled ? 'disabled' : ''} ${className} ${theme}`}
      control={<MuiCheckBox {...restProps} />}
      label={label}
    />
  );
}

CheckBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(constants.checkBoxThemes)),
  disabled: PropTypes.bool,
};

CheckBox.defaultProps = {
  className: '',
  label: '',
  theme: 'theme-1',
  disabled: false,
};

export default CheckBox;
