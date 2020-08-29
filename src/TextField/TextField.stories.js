import React from 'react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { InputAdornment, IconButton } from '@material-ui/core';
import { AccessAlarms, AccountCircle, Audiotrack, Visibility, VisibilityOff } from '@material-ui/icons';
import TextField from './TextField';
import MuiRTL from '../MuiRTL/MuiRTL';
import { TextFieldThemes } from './constants';

export default {
  title: 'TextField',
  parameters: {
    component: TextField,
  },
};

export const Story1 = () => {
  const [value, setValue] = React.useState('');
  return <TextField title="Car Name" value={value} onChange={(e) => setValue(e.target.value)} />;
};
Story1.story = { name: 'simple' };

export const Story2 = () => (
  <MuiRTL>
    <TextField title="نام ماشین" />
  </MuiRTL>
);
Story2.story = { name: 'RTL' };

export const Story3 = () => {
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
  return <TextField title="Car Name" startAdornment={startAdornment} endAdornment={endAdornments} />;
};
Story3.story = { name: 'adornments' };

export const Story4 = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <TextField
      title="Car Password"
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} size="small">
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
Story4.story = { name: 'advanced password' };

export const Story5 = () => {
  const [value, setValue] = React.useState('Clearable text');
  return (
    <TextField
      title="Clearable text"
      value={value}
      isClearable
      onClear={() => setValue('Cleared text')}
      onChange={(e) => setValue(e.target.value)}
      helperText="you need to have your own state to declare onClear, otherwise clearable won't work"
    />
  );
};
Story5.story = { name: 'isClearable, onClear' };

export const Story0 = () => {
  return (
    <TextField
      title={text('title', 'Title')}
      type={text('type', 'password')}
      helperText={text('helperText', 'helperText')}
      value={text('value', 'value')}
      multiline={boolean('multiline', false)}
      rows={number('rows', 5)}
      loading={boolean('loading', false)}
      readonly={boolean('readonly', false)}
      disabled={boolean('disabled', false)}
      numeric={boolean('numeric', false)}
      error={boolean('error', false)}
      isClearable={boolean('isClearable', false)}
      required={boolean('required', false)}
      theme={select('theme', Object.values(TextFieldThemes))}
    />
  );
};
Story0.story = { name: 'addon knobs' };
