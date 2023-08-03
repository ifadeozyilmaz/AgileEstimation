import React, {Fragment} from 'react';
import './App.scss';
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import {RouteTypes} from "../../enums/routes";
import {Home} from "../homepage/home";
import {Estimation} from "../estimationpage/estimation";
import {Navbar} from "../../components";

function App() {
    const location = useLocation();
    const pathTitle = location.pathname.replace(/\//,'');
    return (
      <Fragment>
      <Navbar title={pathTitle}/>
              <Routes>
                  <Route path={RouteTypes.Home} Component={Home} />
                  <Route path={RouteTypes.Estimation} Component={Estimation} />
                  <Route path="*" element={<Navigate to={RouteTypes.Home} replace/>} />
              </Routes>
      </Fragment>
  );
}

export default App;
