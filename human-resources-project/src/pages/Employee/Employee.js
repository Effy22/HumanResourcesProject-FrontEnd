import '../Employee/Employee.css'
import { useDispatch } from 'react-redux';
import React, {useState, useEffect } from 'react';
import Header from '../../components/molecules/Employee/Header'
import MenuList from '../../components/molecules/Employee/MenuList'
import { fetchChangePassword } from '../../store/feautures/authSlice';
import UpdateEmplopee from '../../components/organisms/Employee/UpdateEmployee';
import AddLeave from '../../components/organisms/Employee/AddLeave';
import FindAllMyLeave from '../../components/organisms/Employee/FindAllMyLeave';
import { fetchFindAllMyLeaves } from '../../store/feautures/leaveEmployeeSlice';
import AddExpenses from '../../components/organisms/Employee/AddExpenses';


const Employee = () => {
  const dispatch=useDispatch();
  const [menuId, setMenuId] = useState(0); // Menü ID'sini tutacak state
  const [findAllMyLeaves, setFindAllMyLeaves] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    dispatch(fetchChangePassword(token)); 
  }, [dispatch]);

  const handleMenuItemClick = (id) => {
    if (id === 5) {
      // Logout işlemi
      localStorage.removeItem('jwtToken'); // JWT token'ı kaldır
      window.location.href = '/'; // Ana sayfaya yönlendir
    } else if (id === 0) {
      // auth change password sayfasına git ???
      window.location.href = '/change-password'; 
    } else {
      // Diğer menü öğeleri için
      setMenuId(id); // State'i güncelle
    }
  };

  /*const handleViewPendingLeavesClick = async () => {
    const token = localStorage.getItem('jwtToken');
    setPendingLeaveList(dispatch(fetchGetAllPendingLeavesOfEmployees(token)));
  };*/

  const handleFindAllMyLeavesClick = async () => {
    setFindAllMyLeaves(dispatch(fetchFindAllMyLeaves()));
  } 

  
  return (
    <>
    
      <div className= "container">
          <div className="rowC mt-5 p-3 border border-primary arround-1">
                  <Header />
          </div>

        <div className="rowC mt-3 p-3 border border-success">
                <div className="col=3">
                    <MenuList onMenuItemClick={handleMenuItemClick} />
                </div>

                <div className="col=9">
                  {/* Seçilen menüye göre ekranda görüntülenecek bileşen */}
                    {menuId === 1 && <UpdateEmplopee/>}
                    {menuId === 2 && <AddLeave/>}
                    {menuId === 3 && <FindAllMyLeave findAllMyLeave={findAllMyLeaves} onMenuItemClick={handleFindAllMyLeavesClick}/>}
                    {menuId === 4 && <AddExpenses/>}
                </div>
                    
                   
                   
        </div>
            

      </div>
   

      
    </>
  )
}

export default Employee;


