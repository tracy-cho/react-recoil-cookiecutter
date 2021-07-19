import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import App from 'App';
import reportWebVitals from './reportWebVitals';

import 'style/reset.scss';
import 'locale';

const app = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  app
);

reportWebVitals();
