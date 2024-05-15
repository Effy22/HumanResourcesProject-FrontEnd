import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {fetchAddExpenses} from "../../../store/feautures/expensesSlice";



function AddExpenses(){
    

    const ExpenseType= {
        OFFICE_RENT: 'OFFICE_RENT',
        UTILITIES: 'UTILITIES', 
        OFFICE_SUPPLIES: 'OFFICE_SUPPLIES',
        EQUIPMENT_MAINTENANCE: 'EQUIPMENT_MAINTENANCE',
        ADVERTISING: 'ADVERTISING',
        MARKETING: 'MARKETING',
        TRAVEL: 'TRAVEL',
        TRAINING: 'TRAINING',
        CONSULTING_FEES: 'CONSULTING_FEES',
        SOFTWARE_SUBSCRIPTIONS: 'SOFTWARE_SUBSCRIPTIONS',
        HARDWARE_PURCHASE: 'HARDWARE_PURCHASE',
        INSURANCE: 'INSURANCE',
        LEGAL_FEES: 'LEGAL_FEES',
        ACCOUNTING_FEES: 'ACCOUNTING_FEES',
        EMPLOYEE_SALARIES: 'EMPLOYEE_SALARIES',
        CONTRACTOR_FEES: 'CONTRACTOR_FEES',
        TAXES: 'TAXES',
        PRINTING: 'PRINTING',
        OTHER : 'OTHER'
    }

    const mapExpenseTypeToEnum = (selectedType) => {
        switch (selectedType) {
            case 'OFFICE_RENT':
                return 0;
            case 'UTILITIES':
                return 1;
            case 'OFFICE_SUPPLIES':
                return 2;
            case 'EQUIPMENT_MAINTENANCE':
                return 3;
            case 'ADVERTISING':
                return 4;
            case 'MARKETING':
                return 5;
            case 'TRAVEL':
                return 6;
            case 'TRAINING':
                return 7;
            case 'CONSULTING_FEES':
                return 8;
            case 'SOFTWARE_SUBSCRIPTIONS':
                return 9;
            case 'HARDWARE_PURCHASE':
                return 10;
            case 'INSURANCE':
                return 11;
            case 'LEGAL_FEES':
                return 12;
            case 'ACCOUNTING_FEES':
                return 13;
            case 'EMPLOYEE_SALARIES':
                return 14;
            case 'CONTRACTOR_FEES':
                return 15;
            case 'TAXES':
                return 16;
            case 'PRINTING':
                return 17;
            case 'OTHER':
                return 18;    
            default:
                return null; 
        }
    };
  
 

  /*  const addExpenses = (token) => {
        const updatedExpenses = {
            ...expenses,
            amount: parseFloat(expenses.amount),
            token: token,
        };
        dispatch(fetchAddExpenses(updatedExpenses))
            .then(() => {
                alert('Expense added successfully!');
            })
            .catch((error) => {
                console.error('Expenses eklenirken hata oluştu:', error);
        });
    }

    const handleExpenseTypeChange = (event) => {
        setExpenses({
            ...expenses,
            expenseType: mapExpenseTypeToEnum(event.target.value),
        });
    };*/

    const dispatch = useDispatch();
    const [expenseType, setExpenseType] = useState('');
    const [amount, setAmount] = useState(0);
    const [document,setDocument] = useState('');
    
    const token = localStorage.getItem('jwtToken');
   
    const handleExpenseTypeChange = (event) => {
        setExpenseType(mapExpenseTypeToEnum(event.target.value));
    };
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleDocumentChange = (event) => {
        setDocument(event.target.value);
    };
    

    const handleAddExpenses = () => {
        dispatch(fetchAddExpenses({ token, amount, expenseType }))
          .then(() => {
            alert('Expense added successfully!');
          })
          .catch((error) => {
            console.error('Error while adding expenses:', error);
          });
    };

      
  


    return(
    <>
        <div className="column-expenses">
            <div className="mb-3">
                <label htmlFor="leaveType" className="form-label lbl">Expense Type</label> <br></br>
                <select
                        id="expenseType"
                        className="form-select slct"
                        value={expenseType}
                        onChange={handleExpenseTypeChange}
                        >
                    <option value="">Select Expense Type</option>
                    {Object.values(ExpenseType).map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>Amount</label>
                <input
                    id='amount'
                    type="number"
                    className="form-control inpt"
                    placeholder="Amount"
                    value={amount} 
                    onChange={handleAmountChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>Document</label>
                <input
                        type="text"
                        className="form-control inpt"
                        placeholder="Document"
                        value={document} 
                        onChange={handleDocumentChange}
                />
            </div>
            
            <div className="mb-3">
                <button onClick={handleAddExpenses} type="button" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Add Expenses</button>
            </div>
        </div>
        </>
    );
}

export default AddExpenses;