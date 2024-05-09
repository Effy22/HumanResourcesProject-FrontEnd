import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/LoginPage';
import AdminPanel from './pages/Admin/AdminPanel'; 
import { useSelector } from 'react-redux';
import Company from './pages/Company/Company';
import Manager from './pages/Manager/Manager';


function App() {
  const isLogin  = useSelector(state => state.auth.isLogin);
  //managerislogin ve employeeislogin yapcaz

  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/admin-panel' element={isLogin ? <AdminPanel /> : <Login />} />  
         <Route path='/company' element={<Company />} />
         <Route path='/manager' element={<Manager />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
