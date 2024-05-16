import { useDispatch, useSelector } from "react-redux";

function ExpensesList (){

    const dispatch =useDispatch();
    const expensesList = useSelector(state => state.expenses.expensesList);

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
                    <th scope="col">Description</th>
                    <th scope="col">Request Date</th>
                    <th scope="col">Approval Date</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
            <tbody>
                    {expensesList.map((data, index) => (
                    <tr key={index}>
                        <th scope="row">{data.id}</th>
                        <td>{data.employeeId}</td>
                        <td>{data.managerId}</td>
                        <td>{data.expensesType}</td>
                        <td>{data.amount}</td>
                        <td>{data.document}</td>
                        <td>{data.requestDate}</td>
                        <td>{data.approvalDate}</td>
                        <td>{data.status}</td>
                    </tr>
                    ))}
            </tbody>
            </table>
         </div>
        </>
    )
};

export default ExpensesList;