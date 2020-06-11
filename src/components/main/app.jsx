/* eslint-disable react/prop-types */
import React from 'react';
import {Main} from './main.jsx';

export const App = (props) => {
  const {advCount} = props;

  return <Main
    advCount = {advCount}
  />;
};
