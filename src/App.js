import './App.css';
import React from 'react';
import Slider from './Components/Front-Page/Slider-Page/Slider';
import Main_Mini_component from './Components/Front-Page/Mini-Sliders/Main_Mini_component';
import Asked_Questions from './Components/Front-Page/Asked-Questions/Asked_Questions';
import Footer from './Components/Front-Page/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Slider />
      <Main_Mini_component />
      <Asked_Questions />
      <Footer />
    </div>
  );
}

export default App;
