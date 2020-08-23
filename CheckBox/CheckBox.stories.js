import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import CheckBox from './CheckBox';
import MuiRTL from '../MuiRTL/MuiRTL';
import { CheckBoxThemes } from './constants';

export default {
  title: 'CheckBox',
  parameters: {
    component: CheckBox,
  },
};

export const Story1 = () => <CheckBox />;
Story1.story = { name: 'simple' };

export const Story2 = () => (
  <MuiRTL>
    <CheckBox label="چک باکس" />
  </MuiRTL>
);
Story2.story = { name: 'RTL labeled' };

export const Story3 = () => <CheckBox style={{ color: '#f7f045' }} theme="no-theme" />;
Story3.story = { name: 'custom theme' };

export const Story4 = () => {
  const [value, setValue] = React.useState(false);
  return <CheckBox label="lorem ipsum" checked={value} onChange={(e) => setValue(e.target.checked)} />;
};
Story4.story = { name: 'state management' };

export const Story0 = () => {
  return (
    <CheckBox
      checked={boolean('checked', false)}
      label={text('label', 'لورم ایپسوم')}
      disabled={boolean('disabled', false)}
      theme={select('theme', Object.values(CheckBoxThemes))}
    />
  );
};
Story0.story = {
  name: 'addon knobs',
};
