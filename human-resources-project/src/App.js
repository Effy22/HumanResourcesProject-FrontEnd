import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/LoginPage';
import Company from './pages/Company/Company';
import Manager from './pages/Manager/Manager';


function App() {

  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/company' element={<Company />} />
         <Route path='/manager' element={<Manager/>} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;
