import { useDispatch, useSelector } from 'react-redux';

function FindAllShiftsOfEmployees(){
    const dispatch = useDispatch();
    const allShiftList = useSelector(state => state.shiftManager.allShiftList);

    return(
        <>
            <div className="rowT">
                <table className="company-table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Employee Surname</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Shift Type</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {allShiftList.map((data, index) => (
                    <tr key={index}>
                        <th scope="row">{data.id}</th>
                        <td>{data.employeeName}</td>
                        <td>{data.employeeSurname}</td>
                        <td>{data.startTime}</td>
                        <td>{data.endTime}</td>
                        <td>{data.shiftType}</td>
                        <td>{data.status}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </>
    );

}

export default FindAllShiftsOfEmployees;