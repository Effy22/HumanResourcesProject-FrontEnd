import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/LoginPage';
import Company from './pages/Company/Company';
import Manager from './pages/Manager/Manager';
import Expenses from './pages/Expenses/Expenses';


function App() {

  return (
    <BrowserRouter>

    <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/company' element={<Company />} />
         <Route path='/manager' element={<Manager/>} />
         <Route path='/expenses' element={<Expenses />} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;
