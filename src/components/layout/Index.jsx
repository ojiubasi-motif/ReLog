import React from 'react'
import { Outlet } from "react-router-dom";
import Sidenav from './Sidenav';
import Topnav from './Topnav';


const Index = () => {
  return (
    <div className='row gx-0'>
      <div className='col-md-2'>
        <Sidenav/>
      </div>
      <div className='col col-md-10 d-flex flex-column p-2 px-0 mx-0'>
        <Topnav/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Index