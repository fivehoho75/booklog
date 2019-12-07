import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'store';

const root: React.FC = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default root;
