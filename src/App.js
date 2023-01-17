import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';

import Signup from './components/Signup/Signup';

import LentalList from './components/Main_Lental/LentalList';

import MyLental from './components/Main_MyLental/MyLental';
import Tendious from './components/Main_MyLental/Tendious';
import Management from './components/Main_MyLental/Management';

import EditInfor from './components/Main_EditInfor/EditInfor';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/lentalList" element={<LentalList />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mylental" element={<MyLental />} />
      <Route path="/tendious" element={<Tendious />} />
      <Route path="/management" element={<Management />} />
      <Route path="/editInfor" element={<EditInfor />} />
    </Routes>
  </BrowserRouter>
);

export default App;