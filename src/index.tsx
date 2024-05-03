import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap/index.css';
import App from './bootstrap/App';
import reportWebVitals from './bootstrap/reportWebVitals';
import { Metric } from 'web-vitals';
import dayjs from 'dayjs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Start measuring performance in your app
reportWebVitals((metric: Metric) => {
  console.table({ datetime: dayjs().format('HH:mm:ss DD-MM-YYYY'), ...metric });
});
