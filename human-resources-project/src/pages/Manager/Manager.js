import { useDispatch } from 'react-redux';
import React, {useState, useEffect } from 'react';
import './Manager.css'
import Header from '../../components/molecules/Manager/Header'
import MenuList from '../../components/molecules/Manager/MenuList'
import { fetchGetAllPendingLeavesOfEmployees } from '../../store/feautures/leaveManagerSlice';
import {fetchApproveExpenses, fetchFindAllPendingExpenses } from '../../store/feautures/expensesSlice';
import PendingLeaveList from '../../components/organisms/Manager/PendingLeaveList';
import AddLeaveForEmployee from '../../components/organisms/Manager/AddLeaveForEmployee';
import AddEmployee from '../../components/organisms/Manager/AddEmployee';
import EmployeeList from '../../components/organisms/Manager/EmployeeList';
import ApproveExpenses from '../../components/organisms/Manager/ApproveExpenses'; 
import AddShift from '../../components/organisms/Manager/AddShift';
import FindShiftsOfEmployee from '../../components/organisms/Manager/FindShiftsOfEmployee';
import FindAllShiftsOfEmployees from '../../components/organisms/Manager/FindAllShiftsOfEmployees';

const Manager = () => {
  const dispatch=useDispatch();
  const [menuId, setMenuId] = useState(0); // Menü ID'sini tutacak state
  const [pendingLeaveList, setPendingLeaveList] = useState([]);
  const [pendingExpensesList, setPendingExpensesList] =useState([]);
  const [allShiftList, setAllShiftList] = useState([]);
  
  
  const takenToken = localStorage.getItem('jwtToken');
useEffect(() => {  
  if (takenToken) {
    dispatch(fetchGetAllPendingLeavesOfEmployees(takenToken)); 
    dispatch(fetchFindAllPendingExpenses(takenToken));
    dispatch(fetchApproveExpenses(takenToken));
  } else {
    // Token yoksa yapılacak işlemleri buraya ekleyebilirsiniz.
    console.log('Token not found in localStorage');
  }
}, [dispatch, takenToken]);

  const handleMenuItemClick = (id) => {
    if (id === 8) {
      localStorage.removeItem('jwtToken'); 
      window.location.href = '/'; 
    } else {
      setMenuId(id);
    }
  };


  const handleViewPendingLeavesClick = async () => {
    const token = localStorage.getItem('jwtToken');
    setPendingLeaveList(dispatch(fetchGetAllPendingLeavesOfEmployees(token)));
  };
  const handleApproveExpensesClick = async () => {
    const token = localStorage.getItem('jwtToken');
    setPendingExpensesList(dispatch(fetchFindAllPendingExpenses(token)));
  };

  const handleShiftListClick = async () => {
    const token = localStorage.getItem('jwtToken');
    setAllShiftList(dispatch(fetchApproveExpenses(token)));
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
                    {menuId === 2 && <AddLeaveForEmployee/>}
                    {menuId === 3 && <PendingLeaveList pendingLeaveList={pendingLeaveList} onMenuItemClick ={handleViewPendingLeavesClick} />}
                    {menuId === 4 && <ApproveExpenses pendingExpensesList={pendingExpensesList} onMenuItemClick ={handleApproveExpensesClick} />}
                    {menuId === 5 && <AddShift />}
                    {menuId === 6 && <FindShiftsOfEmployee />}
                    {menuId === 7 && <FindAllShiftsOfEmployees allShiftList={allShiftList} onMenuItemClick={handleShiftListClick}/>}
                </div>
            <div>
        </div>

      </div>
      
    </>
  )
}

export default Manager;
