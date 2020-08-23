/* eslint-disable no-return-assign */
import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide, Paper } from '@material-ui/core';
import Draggable from 'react-draggable';
import MuiRTL from '../MuiRTL/MuiRTL';
import Modal from './Modal';
import Select from '../Select/Select';
import './Modal.stories.css';
import { useBodyRtl } from '../../utils/hooks';

export default {
  title: 'Modal',
  parameters: {
    component: Modal,
  },
};

export const Story1 = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        Simple Modal
      </Modal>
    </React.Fragment>
  );
};
Story1.story = { name: 'simple' };

export const Story2 = () => {
  useBodyRtl();
  const [open, setOpen] = React.useState(false);
  return (
    <MuiRTL>
      <button type="button" onClick={() => setOpen(true)}>
        بازکردن دیالوگ
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <DialogTitle>اجازه دسترسی</DialogTitle>
        <DialogContent>
          <DialogContentText>اپلیکیشن Maps اجازه دسترسی به مکان فعلی شما را می‌خواهد. آیا اجازه می‌دهید</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            بله
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            خیر
          </Button>
        </DialogActions>
      </Modal>
    </MuiRTL>
  );
};
Story2.story = { name: 'RTL' };

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export const Story3 = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        fullScreen
        TransitionComponent={Transition}
        className="fullscreen-with-transition-modal"
      >
        <div>
          <h1>fullScreen Modal</h1>
          <button type="button" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};
Story3.story = { name: 'fullScreen with Transition' };

export const Story4 = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        PaperComponent={(props) => (
          <Draggable handle="#drag-hook" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
          </Draggable>
        )}
      >
        Draggable Modal
        <div id="drag-hook" style={{ backgroundColor: '#00ff00', padding: '30px', margin: 'auto', cursor: 'pointer' }}>
          <h3>Drag Hook</h3>
          <p>It could be a title-bar</p>
        </div>
      </Modal>
    </React.Fragment>
  );
};
Story4.story = { name: 'draggable' };

export const Story5 = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  return (
    <React.Fragment>
      <Select value={scroll} onChange={(e) => setScroll(e.target.value)} title="scroll">
        <option value="paper">paper (default)</option>
        <option value="body">body</option>
      </Select>
      <button type="button" onClick={() => setOpen(true)}>
        open modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)} scroll={scroll}>
        {[...new Array(500)].map(() => `lorem ipsum dolor sit amet`).join(' ')}
      </Modal>
    </React.Fragment>
  );
};
Story5.story = { name: 'scroll types' };

export const Story0 = () => (
  <Modal
    open={boolean('open', false)}
    fullWidth={boolean('fullWidth', false)}
    fullScreen={boolean('fullScreen', false)}
    maxWidth={select('maxWidth', [false, 'xs', 'sm', 'md', 'lg', 'xl'], 'sm')}
  >
    لورم ایپسوم
  </Modal>
);
Story0.story = {
  name: 'addon knobs',
};
