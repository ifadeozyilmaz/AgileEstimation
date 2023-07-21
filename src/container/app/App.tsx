import React from 'react';
import './App.scss';
import {Routes,Route} from "react-router-dom";
import {Home} from "../homepage/home";
import {Estimation} from "../estimationpage/estimation";
function App() {
  return (

              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='estimation' element={<Estimation/>} />
              </Routes>

  );
}

export default App;
