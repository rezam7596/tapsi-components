/* eslint-disable no-return-assign */
import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { AccountCircle, AccessAlarms, Audiotrack } from '@material-ui/icons';
import { InputAdornment } from '@material-ui/core';
import AutoComplete from './AutoComplete';
import MuiRTL from '../MuiRTL/MuiRTL';
import { useBodyRtl } from '../../utils/hooks';
import { TextFieldThemes } from '../TextField/constants';

export default {
  title: 'AutoComplete',
  parameters: {
    component: AutoComplete,
  },
};

export const Story1 = () => {
  const [value, setValue] = React.useState('');
  return (
    <AutoComplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      title="Car brands"
    >
      <option value="">--none--</option>
      <option value="Volkswagen">Volkswagen</option>
      <option value="Toyota">Toyota</option>
      <option value="Daimler">Daimler</option>
    </AutoComplete>
  );
};
Story1.story = { name: 'simple' };

export const Story2 = () => {
  useBodyRtl();
  const [value, setValue] = React.useState('');
  return (
    <MuiRTL>
      <AutoComplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        title="برند ماشین‌ها"
      >
        <option value="IranKhodro">ایران‌خودرو</option>
        <option value="Saipa">سایپا</option>
        <option value="KermanMotor">کرمان‌موتور</option>
      </AutoComplete>
    </MuiRTL>
  );
};
Story2.story = { name: 'RTL' };

export const Story3 = () => {
  const [value, setValue] = React.useState(['Volkswagen', 'Toyota']);
  return (
    <AutoComplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      title="Car brands"
      multiple
    >
      <option value="Volkswagen">Volkswagen</option>
      <option value="Toyota">Toyota</option>
      <option value="Daimler">Daimler</option>
    </AutoComplete>
  );
};
Story3.story = { name: 'multiple' };

export const Story4 = () => {
  const [value, setValue] = React.useState('');
  return (
    <AutoComplete
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      title="Car brands"
      isClearable
      onClear={() => setValue('')}
    >
      <option value="Volkswagen">Volkswagen</option>
      <option value="Toyota">Toyota</option>
      <option value="Daimler">Daimler</option>
    </AutoComplete>
  );
};
Story4.story = { name: 'isClearable + onClear' };

export const Story5 = () => {
  const [value, setValue] = React.useState('');
  const startAdornment = (
    <InputAdornment position="start">
      <AccountCircle color="inherit" size={20} />
    </InputAdornment>
  );
  const endAdornments = (
    <React.Fragment>
      <InputAdornment position="end">
        <AccessAlarms color="inherit" size={20} />
      </InputAdornment>
      <InputAdornment position="end">
        <Audiotrack color="inherit" size={20} />
      </InputAdornment>
      <InputAdornment position="end">Kg</InputAdornment>
    </React.Fragment>
  );
  return (
    <AutoComplete
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      title="Car brands"
      startAdornment={startAdornment}
      endAdornment={endAdornments}
    >
      <option value="Volkswagen">Volkswagen</option>
      <option value="Toyota">Toyota</option>
      <option value="Daimler">Daimler</option>
    </AutoComplete>
  );
};
Story5.story = { name: 'adornment' };

export const Story6 = () => {
  const [value, setValue] = React.useState('');
  return (
    <AutoComplete
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      title="Car brands"
      onInputChange={() => console.log('Input Changed')}
    >
      <option value="Volkswagen">Volkswagen</option>
      <option value="Toyota">Toyota</option>
      <option value="Daimler">Daimler</option>
    </AutoComplete>
  );
};
Story6.story = { name: 'onInputChange' };

export const Story0 = () => {
  const [value, setValue] = React.useState('');
  return (
    <AutoComplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      title={text('title', 'title')}
      helperText={text('helperText', 'helperText')}
      theme={select('theme', Object.values(TextFieldThemes))}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      readonly={boolean('readonly', false)}
      error={boolean('error', false)}
      isClearable={boolean('isClearable', false)}
    >
      <option value="Volkswagen">Volkswagen</option>
      <option value="Toyota">Toyota</option>
      <option value="Daimler">Daimler</option>
    </AutoComplete>
  );
};
Story0.story = { name: 'addon knobs' };
