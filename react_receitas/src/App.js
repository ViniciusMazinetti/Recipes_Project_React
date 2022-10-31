import './App.css';
import React from 'react';
import { BrowserRouter} from "react-router-dom";

import LoginContextProvider from './contexts/LoginContext';
import AppRoutes from './routes/AppRoutes.js';


function App() {
  return (
    
      <BrowserRouter>
        <LoginContextProvider>
          <AppRoutes/>
        </LoginContextProvider>
      </BrowserRouter>
    
  );
}

export default App;
