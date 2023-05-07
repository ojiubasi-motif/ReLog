import {useContext} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {ClientContext} from "./context/ClientContext";
import PageLayout from  './components/layout/Index';
import Dashboard from './components/dashboard/Index'
import Sessions from './components/sessions/Index';
import Login from './components/authorisation/Login'
import Register from './components/authorisation/Register'

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
          </Route>
        </Routes>
    </>
  );
}

export default App;
