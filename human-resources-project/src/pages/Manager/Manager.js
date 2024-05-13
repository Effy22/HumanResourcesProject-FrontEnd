import { useDispatch,useSelector } from 'react-redux';
import React, {useState, useEffect } from 'react';
import './Manager.css'
import Header from '../../components/molecules/Manager/Header'
import MenuList from '../../components/molecules/Manager/MenuList'
import { fetchGetAllPendingLeavesOfEmployees } from '../../store/feautures/leaveManagerSlice';
import {fetchUpdateCompany } from '../../store/feautures/companySlice';
import PendingLeaveList from '../../components/organisms/Manager/PendingLeaveList';
import AddLeaveForEmployee from '../../components/organisms/Manager/AddLeaveForEmployee';
import AddEmployee from '../../components/organisms/Manager/AddEmployee';
import EmployeeList from '../../components/organisms/Manager/EmployeeList';
import UpdateCompanyList from "../../components/organisms/Manager/UpdateCompanyList";


const Manager = () => {
  const dispatch=useDispatch();
  const [menuId, setMenuId] = useState(0); // Menü ID'sini tutacak state
  const [pendingLeaveList, setPendingLeaveList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  
  
  const takenToken = localStorage.getItem('jwtToken');
useEffect(() => {  
  if (takenToken) {
    dispatch(fetchGetAllPendingLeavesOfEmployees(takenToken)); 
  } else {
    // Token yoksa yapılacak işlemleri buraya ekleyebilirsiniz.
    console.log('Token not found in localStorage');
  }
}, [dispatch, takenToken]);

  const handleMenuItemClick = (id) => {
    if (id === 5) {
      localStorage.removeItem('jwtToken'); 
      window.location.href = '/'; 
    } else if (id === 2) {
      window.location.href = '/company'; 
    } else {
      setMenuId(id);
    }
  };
  const handleViewPendingLeavesClick = async () => {
    const token = localStorage.getItem('jwtToken');
    setPendingLeaveList(dispatch(fetchGetAllPendingLeavesOfEmployees(token)));
  };
  

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
                    {/* Seçilen menüye göre ekranda görüntülenecek bileşen */}
                    {menuId === 0 && <AddEmployee />}
                    {menuId === 1 && <EmployeeList />}
                    {menuId === 2 && <UpdateCompanyList updateCompanyList={updateCompanyList} onMenuItemClick={handleUpdateCompanyClick} />}
                    {menuId === 3 && <AddLeaveForEmployee/>}
                    {menuId === 4 && <PendingLeaveList pendingLeaveList={pendingLeaveList} onMenuItemClick ={handleViewPendingLeavesClick} />}
                    
                   
                  </div>
            <div>
        </div>

        </div>
      
    </>
  )
}

export default Manager
