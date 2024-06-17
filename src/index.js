import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
// import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
// import ErrorBoundary from './components/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container);  // Create a root
root.render(
  <React.StrictMode>
      <Provider store={store}>
      {/* <Router> */}
            <App />
      {/* </Router> */}
    </Provider>
  </React.StrictMode>
);

