import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddExpenses } from "../../../store/feautures/expensesSlice";

function AddExpenses() {
    const dispatch = useDispatch();
    const newToken = useSelector(state => state.auth.token);

    const [expenses, setExpenses] = useState({
        token: newToken,
        amount: 0,
        expenseType: "",
        document: "",
    });

    const expensesTypes = {
        OFFICE_RENT: "OFFICE_RENT",
        UTILITIES: "UTILITIES",
        OFFICE_SUPPLIES: "OFFICE_SUPPLIES",
        EQUIPMENT_MAINTENANCE : "EQUIPMENT_MAINTENANCE",
        ADVERTISING : "ADVERTISING",
        MARKETING : "MARKETING",
        TRAVEL : "TRAVEL",
        TRAINING : "TRAINING",
        CONSULTING_FEES : "CONSULTING_FEES",
        SOFTWARE_SUBSCRIPTIONS : "SOFTWARE_SUBSCRIPTIONS",
        HARDWARE_PURCHASE : "HARDWARE_PURCHASE",
        INSURANCE : "INSURANCE",
        LEGAL_FEES : "LEGAL_FEES",
        ACCOUNTING_FEES : "ACCOUNTING_FEES",
        EMPLOYEE_SALARIES : "EMPLOYEE_SALARIES",
        CONTRACTOR_FEES : "CONTRACTOR_FEES",
        TAXES : "TAXES",
        PRINTING : "PRINTING",
        SHIPPING : "SHIPPING",
        REPAIRS_AND_MAINTENANCE :  "REPAIRS_AND_MAINTENANCE",
        INTERNET_SERVICES :    "INTERNET_SERVICES",
        TELEPHONE_SERVICES: "TELEPHONE_SERVICES",
      }

    const addExpenses = () => {
        dispatch(fetchAddExpenses(expenses));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenses({
            ...expenses,
            [name]: value,
        });
    };

    return (
        <>
            <div className="column-addleave">
                <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>Expenses Type</label>
                    <select
                        className="form-control"
                        name="expenseType"
                        value={expenses.expenseType}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Expense Type</option>
                        {Object.keys(expensesTypes).map((type) => (
                            <option key={type} value={type}>{expensesTypes[type]}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>Amount</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Amount"
                        name="amount"
                        value={expenses.amount}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>Document</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Document"
                        name="document"
                        value={expenses.document}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <button onClick={addExpenses} type="button" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Add Expenses</button>
                </div>
            </div>
        </>
    );
}

export default AddExpenses;
