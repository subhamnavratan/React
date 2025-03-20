import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

/* function MyApp() {
  return (
    <div>
      <h1>Subham is learning React</h1>
      <h2>Chai and React</h2>
    </div>
  );
}

const Element = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank', rel: 'noopener noreferrer' },
  'Click me to visit Google'
); */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyApp /> */}
    {/* {Element} */}
    {/* {ReactElement} Now being used */}
    <App />
  </StrictMode>
);
