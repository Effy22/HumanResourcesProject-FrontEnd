import { useState } from "react";
import { useDispatch } from "react-redux";
import {fetchAddExpenses} from "../../../store/feautures/expensesSlice";

function AddExpenses(){

    const ExpensesType= {
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
        SHIPPING: 'SHIPPING',
        REPAIRS_AND_MAINTENANCE: 'REPAIRS_AND_MAINTENANCE',
        INTERNET_SERVICES: 'INTERNET_SERVICES',
        TELEPHONE_SERVICES: 'TELEPHONE_SERVICES',
        OTHER : 'OTHER'
    }

    const dispatch= useDispatch();
    const [expenses, setExpenses] =useState({
        token: "",
        amount: 0,
        expenseType: ExpensesType.OFFICE_RENT,
        document: "",
    });

    const takenToken=localStorage.getItem('jwtToken');

    const addExpenses = () => {
        setExpenses({
            ...expenses, 
            token: takenToken,
        });
        dispatch(fetchAddExpenses(expenses));
    }

    return(
    <>
        <div className="column-addleave">
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Expenses Type</label>
                <input
                        type="text"
                        className="form-control"
                        placeholder="Expenses Type"
                        onChange={(evt) => {
                            setExpenses({
                                ...expenses,
                                expenseType: evt.target.value,
                            });
                        }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Amount</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Amount"
                    onChange={(evt) => {
                        setExpenses({
                             ...expenses,
                             amount: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Document</label>
                <input
                        type="text"
                        className="form-control"
                        placeholder="Document"
                        onChange={(evt) => {
                            setExpenses({
                                ...expenses,
                                document: evt.target.value,
                            });
                        }}
                />
            </div>
            
            <div className="mb-3">
                <button onClick={addExpenses} type="button" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Add Expenses</button>
            </div>
        </div>
        </>
    
)
};
export default AddExpenses;