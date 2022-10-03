import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {state} from './redux/state';
import {App} from './App';

ReactDOM.render(
    <App state = {state} />,
  document.getElementById('root')
);