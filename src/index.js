import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/main/app.jsx';

const init = () => {
  const settings = {
    amountOfOffers: 312,
  };

  ReactDOM.render(
      <App
        amountOfOffers={settings.amountOfOffers}
      />,
      document.querySelector(`#root`)
  );
};

init();
