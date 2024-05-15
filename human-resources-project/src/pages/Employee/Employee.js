import '../Employee/Employee.css'
import { useDispatch } from 'react-redux';
import React, {useState, useEffect } from 'react';
import Header from '../../components/molecules/Employee/Header'
import MenuList from '../../components/molecules/Employee/MenuList'
import UpdateEmplopee from '../../components/organisms/Employee/UpdateEmployee';
import AddLeave from '../../components/organisms/Employee/AddLeave';
import FindAllMyLeave from '../../components/organisms/Employee/FindAllMyLeave';
import { fetchFindAllMyLeaves } from '../../store/feautures/leaveEmployeeSlice';
import AddExpenses from '../../components/organisms/Employee/AddExpenses';
import ExpensesList from '../../components/organisms/Employee/ExpensesList';

const Employee = () => {
  const dispatch=useDispatch();
  const [menuId, setMenuId] = useState(0); // Menü ID'sini tutacak state
  const [allLeaveList, setAllLeaveList] = useState([]);
  
  const takenToken = localStorage.getItem('jwtToken');
  

  useEffect(() => {
    if(takenToken){
     dispatch(fetchFindAllMyLeaves(takenToken))
     .then((data) => {
      dispatch(setAllLeaveList(data.payload));
      })
      .catch((error) => {
        //console.log('Error while fetching data..:',error);
      });
 }else{
     console.log("Token not found in localStorage");
 }
}, [dispatch, takenToken]); 

  const handleMenuItemClick = (id) => {
    if (id === 7) {
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
    const token =localStorage.getItem('jwtToken');
    setAllLeaveList(dispatch(fetchFindAllMyLeaves(token)));
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
                    {menuId === 3 && <FindAllMyLeave allLeaveList={allLeaveList} onMenuItemClick={handleFindAllMyLeavesClick}/>}
                    {menuId === 4 && <AddExpenses/>}
                    {menuId === 5 && <ExpensesList/>}

                </div>
                    
                   
                   
        </div>
            

      </div>
   

      
    </>
  )
}

export default Employee;


