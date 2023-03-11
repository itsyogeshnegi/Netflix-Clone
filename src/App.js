import './App.css';
import React from 'react';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import Introduction from './Pages/Introduction/Introduction';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Introduction />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
