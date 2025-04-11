/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*this new changes is for my system.*/
 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This CSS file should include your Tailwind directives
import App from './App';

// Create the root element (ensure your public/index.html has a div with id "root")
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render your application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
