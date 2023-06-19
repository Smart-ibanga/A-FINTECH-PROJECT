import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Loans from '../pages/Loans';
import User from '../pages/User';
import Help from '../pages/Help/Help';
import LogOut from '../pages/LogOut';


function SidePage() {
  return (
      <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/user" element={<User />} />
            <Route path="/help" element={<Help />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
     </section>
  );
}

export default SidePage;
