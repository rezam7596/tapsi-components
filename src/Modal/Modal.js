import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';

function Modal({ className, ...restProps }) {
  return <Dialog classes={{ paper: className }} {...restProps} />;
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

Modal.defaultProps = {
  onClose: () => {},
  className: '',
};

export default Modal;
