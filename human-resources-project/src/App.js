import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useSelector } from "react-redux";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/LoginPage';
import AdminPanel from './pages/Admin/AdminPanel'; 


function App() {

  const isLogin = useSelector(state => state.personel.isLogin);

  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/admin-panel' element={isLogin ? <AdminPanel />: <Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
