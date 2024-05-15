import { useDispatch, useSelector } from "react-redux";
import { fetchApproveExpenses } from "../../../store/feautures/expensesSlice";


function ApproveExpenses (){

    const dispatch =useDispatch();
    const pendingExpensesList = useSelector(state => state.expenses.pendingExpensesList);

    const token=localStorage.getItem('jwtToken');

    const handleApprove = (expensesId, employeeId) => {
        console.log("Approveexpenses.js token...: ", token);
        if(token){
            dispatch(fetchApproveExpenses({ expensesId, employeeId, token }));
        console.log("Expenses onaylandı:", expensesId);
        }else{
            console.error("Token bulunamadı!");
        }  
    };




    return(
    <>
        <div className="rowT">
            <table className="company-table">
              <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Employee-ID</th>
                    <th scope="col">Manager-ID</th>
                    <th scope="col">Expenses Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
            </thead>
                 <tbody>
                    {pendingExpensesList.map((expenses, index) => (
                    <tr key={index}>
                        <th scope="row">{expenses.id}</th>
                        <td>{expenses.employeeId}</td>
                        <td>{expenses.managerId}</td>
                        <td>{expenses.expensesType}</td>
                        <td>{expenses.amount}</td>
                        <td>{expenses.status}</td>
                        <td>
                            <button onClick={() => handleApprove(expenses.id, expenses.employeeId)}>Approve</button>
                        </td>
                    </tr>
                    ))}
            </tbody>
            </table>
         </div>
        </>
    )
};

export default ApproveExpenses;