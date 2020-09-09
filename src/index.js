import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalProvider } from './context/context';


import App from './components/App';

import './styles/index.scss';


ReactDOM.render(
  
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
