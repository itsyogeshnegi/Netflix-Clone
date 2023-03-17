import './App.css';
import React from 'react';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import Introduction from './Pages/Introduction/Introduction';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import StepOne from './Pages/Choose-Plans/StepOne';
import StepTwo from './Pages/Choose-Plans/StepTwo';
import Stepthree from './Pages/Choose-Plans/Stepthree';
import NetflixHomePage from './Pages/Netflix-Main-Page/NetflixHomePage';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Introduction />}
          />

          <Route
            path='/login'
            element={<Login />}
          />

          <Route
            path='/signup'
            element={<Signup />}
          />

          <Route
            path='/stepone'
            element={<StepOne />}
          />

          <Route
            path='/steptwo'
            element={<StepTwo />}
          />

          <Route
            path='/stepthree'
            element={<Stepthree />}
          />

          <Route
            path='/netflixDashBoard'
            element={<NetflixHomePage />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
