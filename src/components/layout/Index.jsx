import React from 'react'
import { Outlet } from "react-router-dom";
import Sidenav from './Sidenav';
import Topnav from './Topnav';


const Index = () => {
  return (
    <div className='row'>
      <Sidenav/>
      <div className='col col-md-9 d-flex flex-column'>
        <Topnav/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Index