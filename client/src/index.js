import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthenticationContextProvider } from './context/authenticationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </React.StrictMode>
);

//By wrapping App component with the AuthenticationContextProvider I created, we can use currentUser state as well as login/logout functions in authenticationContext.js