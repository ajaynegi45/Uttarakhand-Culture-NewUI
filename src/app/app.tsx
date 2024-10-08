// app.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DarkModeProvider } from './darkModeContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);