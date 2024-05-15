import React, { useState, useEffect } from "react";
import './Expenses.css';
import { useDispatch } from 'react-redux';
import {fetchAddExpenses, fetchFindAllExpenses} from '../../store/feautures/expensesSlice';
import AddExpenses from '../../components/organisms/Employee/AddExpenses';
import ExpensesList from '../../components/organisms/Employee/ExpensesList';
import MenuList from '../../components/molecules/Expenses/MenuList';
import Header from '../../components/molecules/Expenses/Header';


function Expenses(){
    const dispatch=useDispatch();
    const [menuId, setMenuId] = useState(0); 
    const [expensesList, setExpensesList] =useState([]);

    const takenToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        if(takenToken){
            dispatch(fetchAddExpenses(takenToken));
            dispatch(fetchFindAllExpenses(takenToken));
        }else{
            console.log("Token not found in localStorage");
        }
    }, [dispatch, takenToken]); 

    const handleMenuItemClick = (id) => {
        if(id===2){
            localStorage.removeItem('jwtToken');
            window.location.href= '/employee'; //employee diye düzelt
        }else{
            setMenuId(id);
        }
    };

    const handleExpensesListClick = async () => {
        const token =localStorage.getItem('jwtToken');
        setExpensesList(dispatch(fetchFindAllExpenses(token)));
    };


    return(<>

            <div className="container">
                <div className="rowC mt-5 p-3 border border-primary arround-1">
                    <Header />
                </div>

                <div className="rowC mt-3 p-3 border border-success">
                    <div className="col=3">
                        {/* Menü bileşenine tetikleyici fonksiyonu ve seçilen menüyü ileteceğiz */}
                        <MenuList onMenuItemClick={handleMenuItemClick} />
                    </div>  
                    <div className="col=9">
                        {/* Seçilen menüye göre ekranda görüntülenecek bileşen */}
                        {menuId === 0 && <AddExpenses />}
                        {menuId === 1 && <ExpensesList expensesList={expensesList} onMenuItemClick={handleExpensesListClick} />}
                    </div>
                </div>
            </div> 
    </>)
};

export default Expenses;