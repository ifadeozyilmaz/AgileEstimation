import React from 'react';
import './App.scss';
import {Routes,Route, Navigate} from "react-router-dom";
import {Home} from "../homepage/home";
import {Estimation} from "../estimationpage/estimation";
import {Navbar} from "../../components";

function App() {
  return (
      <>
      <Navbar/>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='estimation' element={<Estimation/>} />
                  <Route path="*" element={<Navigate to="/" replace />}
                  />
              </Routes>
      </>
  );
}

export default App;
