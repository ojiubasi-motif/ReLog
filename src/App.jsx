/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useContext, useEffect, useRef} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {ClientContext} from "./context/ClientContext";
import PageLayout from  './components/layout/Index';
import Dashboard from './components/dashboard/Index'
import Sessions from './components/sessions/Index';
import Login from './components/authorisation/Login'
import Register from './components/authorisation/Register'
import Issues from './components/issues/Index'
import Untriaged from './components/issues/outlets/Untriaged'
import HighImpact from './components/issues/outlets/HighImpact'
import LowImpact from './components/issues/outlets/LowImpact'
import Ignored from './components/issues/outlets/Ignored'
import NotFound from "./components/assets/NotFound";

function App() {
  const {isLoggedIn} = useContext(ClientContext);
  
  return (
    <>
        <Routes>
          <Route path="/login" element={isLoggedIn? <Navigate to="/"/>:<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<PageLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/sessions" element={<Sessions/>}/>
            <Route path="/issues" element={<Issues/>}>
              <Route index  element={<Untriaged/>}/>
              <Route path="high-impact" element={<HighImpact/>}/>
              <Route path="low-impact" element={<LowImpact/>}/>
              <Route path="ignored" element={<Ignored/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
