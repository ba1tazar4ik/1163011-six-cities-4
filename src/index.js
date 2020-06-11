import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/main/app.jsx';

const init = () => {
  const settings = {
    advCount: 312,
  };

  ReactDOM.render(
      <App
        advCount={settings.advCount}
      />,
      document.querySelector(`#root`)
  );
};

init();
