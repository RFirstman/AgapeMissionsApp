import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}

registerServiceWorker();