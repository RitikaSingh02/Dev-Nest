import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App/>

  // <React.StrictMode>
  //   {/* for error rendering on the browser it is used */}
  //   {/* StrictMode currently helps with:

  //   Identifying components with unsafe lifecycles
  //   Warning about legacy string ref API usage
  //   Warning about deprecated findDOMNode usage
  //   Detecting unexpected side effects
  //   Detecting legacy context API 
  //   all this is done only in development phase production is not affected by this

  // */}
  // </React.StrictMode>
  ,document.getElementById('root')
);

// reportWebVitals();
