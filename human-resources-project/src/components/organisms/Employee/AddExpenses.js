import { useState } from "react";
import { useDispatch } from "react-redux";
import {fetchAddExpenses} from "../../../store/feautures/expensesSlice";

function AddExpenses(){

    const dispatch= useDispatch();
    const [expenses, setExpenses] =useState({
        token: "",
        amount: 0,
        expenseType: "",
        document: "",
    });

    const newToken = useSelector(state => state.auth.token);

    const addExpenses = () => {
        setExpenses({
            ...expenses, 
            token: newToken,
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