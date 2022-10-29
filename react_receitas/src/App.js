import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from './pages/LoginPage/LoginPage';
import Home from './pages/Home';
import LoginContextProvider from './contexts/LoginContext';

function App() {
  return (

    
      <BrowserRouter>
        <LoginContextProvider>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/login" exact element={<LoginPage/>} />
          </Routes>
        </LoginContextProvider>
      </BrowserRouter>
    
    

  );
}

export default App;
