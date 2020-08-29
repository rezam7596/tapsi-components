import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { InputAdornment, IconButton, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '../TextField';
import { TextFieldThemes } from '../TextField/constants';
import style from './AutoComplete.scss';

function AutoComplete({
  title,
  value,
  onChange,
  onInputChange,
  multiple,
  children,
  isClearable,
  onClear,
  endAdornment,
  startAdornment,
  inputProps,
  theme,
  loading,
  disabled,
  readonly,
  error,
  helperText,
}) {
  const selectRef = React.useRef(null);
  const options = React.Children.toArray(children).map((child) => ({ value: child.props.value, label: child.props.children }));
  const getOptionByValue = (optionValue) => options.find((option) => option.value === optionValue) || null;
  const getValueByOption = (valueOption) => (valueOption ? valueOption.value : null);
  const getOptionsByValue = (optionsValue) => options.filter((option) => optionsValue.includes(option.value)) || null;
  const getValueByOptions = (valueOptions) => valueOptions.map((valueOption) => valueOption.value) || null;
  const delimiter = (function () {
    if (process.env.BROWSER) {
      return getComputedStyle((selectRef.current || {}).node || document.querySelector('body')).direction === 'rtl' ? '،' : ',';
    }
    return '،';
  })();
  return (
    <Autocomplete
      value={multiple ? getOptionsByValue(value) : getOptionByValue(value)}
      autoComplete={false}
      multiple={multiple}
      disableClearable
      onChange={(event, newValue) =>
        multiple ? onChange(event, getValueByOptions(newValue)) : onChange(event, getValueByOption(newValue))
      }
      onInputChange={onInputChange}
      options={options}
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <MenuItem className="shared-components-auto-complete-menu-item" value={option.value}>
          {option.label}
        </MenuItem>
      )}
      renderTags={(valueOptions) =>
        valueOptions.map((option) => <div className="shared-components-auto-complete-tag">{`${option.label}${delimiter} `}</div>)
      }
      disabled={disabled}
      loading={loading}
      renderInput={(params) => (
        <TextField
          title={title}
          inputProps={{ ref: selectRef, ...(inputProps || {}) }}
          loading={loading}
          readonly={readonly}
          error={error}
          helperText={helperText}
          startAdornment={startAdornment}
          {...(endAdornment || isClearable
            ? {
                endAdornment: (
                  <React.Fragment>
                    {endAdornment}
                    {isClearable && (
                      <InputAdornment position="end">
                        <IconButton aria-label="clear field" onClick={onClear} size="small">
                          <ClearIcon color="inherit" fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    )}
                    <InputAdornment className="shared-components-select-arrow-adornment" position="end">
                      <ArrowDropDownIcon color="inherit" fontSize="small" />
                    </InputAdornment>
                  </React.Fragment>
                ),
              }
            : {})}
          theme={theme}
          {...params}
        />
      )}
    />
  );
}

AutoComplete.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  multiple: PropTypes.bool,
  isClearable: PropTypes.bool,
  onClear: PropTypes.func,
  endAdornment: PropTypes.any,
  startAdornment: PropTypes.any,
  inputProps: PropTypes.object,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(TextFieldThemes)),
};

AutoComplete.defaultProps = {
  title: '',
  onChange: () => {},
  onInputChange: () => {},
  children: [],
  multiple: false,
  isClearable: false,
  onClear: () => {},
  endAdornment: null,
  startAdornment: null,
  inputProps: null,
  loading: false,
  disabled: false,
  readonly: false,
  error: false,
  theme: undefined,
  helperText: '',
};

export default withStyles(style)(AutoComplete);
