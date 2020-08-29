/* eslint-disable no-return-assign */
import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import DateTime from './DateTime';
import MuiRTL from '../MuiRTL/MuiRTL';
import { useBodyRtl } from '../../utils/hooks';

export default {
  title: 'DateTime',
  parameters: {
    component: DateTime,
  },
};
export const Story1 = () => {
  useBodyRtl();
  return (
    <MuiRTL>
      <DateTime />
    </MuiRTL>
  );
};
Story1.story = { name: 'simple' };

export const Story2 = () => {
  useBodyRtl();
  const [value, setValue] = React.useState(new Date());
  return (
    <MuiRTL>
      <DateTime value={value} onChange={(newValue) => setValue(newValue)} removeDateEnabled />
    </MuiRTL>
  );
};

Story2.story = { name: 'state management' };

export const Story3 = () => {
  useBodyRtl();
  const [value, setValue] = React.useState(new Date());
  return (
    <MuiRTL>
      <DateTime value={value} onChange={(newValue) => setValue(newValue)} onClear={() => setValue('')} removeDateEnabled />
    </MuiRTL>
  );
};

Story3.story = { name: 'customized onClear' };

export const Story0 = () => {
  return (
    <DateTime
      disabled={boolean('disable', false)}
      readonly={boolean('readonly', false)}
      isGregorian={boolean('isGregorian', false)}
      timePickerEnabled={boolean('timePickerEnabled', false)}
      showTodayButton={boolean('showTodayButton', false)}
      removeDateEnabled={boolean('removeDateEnabled', false)}
      showToggleCalenderTypeButton={boolean('showToggleCalenderTypeButton', false)}
      timePickerEnabledFormat={text('timePickerEnabledFormat', 'YYYY/M/D HH:mm')}
      timePickerDisabledFormat={text('timePickerDisabledFormat', 'YYYY/M/D')}
    >
      لورم ایپسوم
    </DateTime>
  );
};
Story0.story = {
  name: 'addon knobs',
};
