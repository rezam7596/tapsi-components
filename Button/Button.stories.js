/* eslint-disable no-return-assign */
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Button from './Button';
import { buttonThemes, buttonVariants, buttonSizes } from './constants';
import './Button.stories.css';

export default {
  title: 'Button',
  parameters: {
    component: Button,
  },
};

export const Story1 = () => <Button>لورم ایپسوم</Button>;
Story1.story = { name: 'simple' };

export const Story2 = () => <Button startIcon={<DeleteIcon />}>لورم ایپسوم</Button>;
Story2.story = { name: 'with delete Icon' };

export const Story3 = () => (
  <Button style={{ backgroundColor: 'green', color: 'white' }} theme="no-theme">
    لورم ایپسوم
  </Button>
);
Story3.story = { name: 'custom style' };

export const Story0 = () => {
  return (
    <Button
      variant={select('variant', Object.values(buttonVariants))}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      theme={select('theme', Object.values(buttonThemes))}
      size={select('size', Object.values(buttonSizes), buttonSizes.MEDIUM)}
      loadingAndDisabled={boolean('loadingAndDisabled', false)}
    >
      لورم ایپسوم
    </Button>
  );
};
Story0.story = {
  name: 'addon knobs',
};
