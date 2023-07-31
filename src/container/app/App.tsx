import React from 'react';
import './App.scss';
import {Routes,Route} from "react-router-dom";
import {RouteTypes} from "../../enums/routes";
import {Home} from "../homepage/home";
import {Estimation} from "../estimationpage/estimation";
import {Navbar} from "../../components";

function App() {
  return (
      <>
      <Navbar/>
              <Routes>
                  <Route path={RouteTypes.Home} Component={Home} />
                  <Route path={RouteTypes.Estimation} Component={Estimation} />
                  <Route path="*" Component={Home}/>
              </Routes>
      </>
  );
}

export default App;
