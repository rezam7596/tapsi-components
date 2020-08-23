import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button as MuiButton, CircularProgress } from '@material-ui/core';
import style from './Button.scss';
import * as constants from './constants';
import { buttonThemes, buttonVariants, buttonSizes } from './constants';

function Button({ children, loading, disabled, loadingAndDisabled, theme, className, variant, size, classes, ...restProps }) {
  return (
    <MuiButton
      variant={variant}
      size={size}
      classes={{
        ...classes,
        root: `shared-component-button ${className} ${theme} ${classes.root || ''}`,
        disabled: `shared-component-disabled ${classes.disabled || ''}`,
        outlined: `shared-components-button-outlined ${classes.outlined || ''}`,
        text: `shared-components-button-text ${classes.text || ''}`,
      }}
      disabled={loadingAndDisabled || disabled}
      {...restProps}
    >
      {loadingAndDisabled || loading ? (
        <React.Fragment>
          <div style={{ visibility: 'hidden' }}>{children}</div>
          <CircularProgress className="shared-component-button-loading" size={24} color="inherit" />
        </React.Fragment>
      ) : (
        children
      )}
    </MuiButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  loadingAndDisabled: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(constants.buttonThemes)),
  variant: PropTypes.oneOf(Object.values(constants.buttonVariants)),
  size: PropTypes.oneOf(Object.values(constants.buttonSizes)),
  classes: PropTypes.object,
};

Button.defaultProps = {
  loading: false,
  disabled: false,
  loadingAndDisabled: false,
  theme: buttonThemes.THEME_1,
  className: '',
  variant: buttonVariants.CONTAINED,
  size: buttonSizes.MEDIUM,
  classes: {},
};

export default withStyles(style)(Button);
