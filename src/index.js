import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import 'tachyons';

ReactDOM.render(
  <Hello greeting = {'Hello' + 'React Ninja'} />,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
