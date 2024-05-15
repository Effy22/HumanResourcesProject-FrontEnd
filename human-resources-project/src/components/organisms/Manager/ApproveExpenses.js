import { useDispatch, useSelector } from "react-redux";
import { fetchApproveExpenses } from "../../../store/feautures/expensesSlice";

function ApproveExpenses (){

    const dispatch =useDispatch();
    const pendingExpensesList = useSelector(state => state.expenses.pendingExpensesList);

    const handleApprove = (expensesId) => {
        dispatch(fetchApproveExpenses(expensesId));
        console.log("Expenses onaylandı:", expensesId);
    }

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
                    <th scope="col">Document</th>
                    <th scope="col">Request Date</th>
                    <th scope="col">Approval Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
            <tbody>
                    {pendingExpensesList.map((expenses, index) => (
                    <tr key={index}>
                        <th scope="row">{p.id}</th>
                        <td>{expenses.employeeId}</td>
                        <td>{expenses.managerId}</td>
                        <td>{expenses.expensesType}</td>
                        <td>{expenses.amount}</td>
                        <td>{expenses.document}</td>
                        <td>{expenses.requestDate}</td>
                        <td>{expenses.approvalDate}</td>
                        <td>{expenses.status}</td>
                        <td>
                            <button onClick={() => handleApprove(expenses.id)}>Approve</button>
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