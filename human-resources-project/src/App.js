import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/LoginPage';
import AdminPanel from './pages/Admin/AdminPanel'; 


function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/admin-panel' element={<AdminPanel />}/>
    </Routes>
      </BrowserRouter>
  );
}

export default App;
