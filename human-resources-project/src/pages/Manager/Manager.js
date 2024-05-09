import { useDispatch,useSelector } from 'react-redux';
import React, {useState, useEffect } from 'react';
import './Manager.css'
import Header from '../../components/molecules/Manager/Header'
import MenuList from '../../components/molecules/Manager/MenuList'
import { fetchGetAllPendingLeavesOfEmployees } from '../../store/feautures/leaveManagerSlice';
import PendingLeaveList from '../../components/organisms/Manager/PendingLeaveList';
import AddLeaveForEmployee from '../../components/organisms/Manager/AddLeaveForEmployee';
import AddEmployee from '../../components/organisms/Manager/AddEmployee';


const Manager = () => {
  const dispatch=useDispatch();
  const [menuId, setMenuId] = useState(0); // Menü ID'sini tutacak state
  const [pendingLeaveList, setPendingLeaveList] = useState([]);
  

  const token = localStorage.getItem('jwtToken');

  // belki bu da denencek : const token = useSelector(state => state.auth.token);
  
  useEffect(() => {
    dispatch(fetchGetAllPendingLeavesOfEmployees());
    //başka fetchler buraya
  }, [dispatch]);

  const handleMenuItemClick = (id) => {
    setMenuId(id); // State'i güncelle
  };
  const handleViewPendingLeavesClick = async () => {
    setPendingLeaveList(dispatch(fetchGetAllPendingLeavesOfEmployees()));
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
