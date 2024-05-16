import { useDispatch, useSelector } from "react-redux";

function FindAllMyShifts(){
    const dispatch = useDispatch();
    const myShiftList = useSelector(state => state.shiftEmployee.myShiftList);
    console.log("myShiftList:", myShiftList);
    
    return(
        <>
        <div className="rowT">
            <table className="company-table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Shift Type</th>
                <th scope="col">Manager ID</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {myShiftList.map((data, index) => (
                <tr key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.startTime}</td>
                    <td>{data.endTime}</td>
                    <td>{data.shiftType}</td>
                    <td>{data.managerId}</td>
                    <td>{data.status}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </>
    )
};

export default FindAllMyShifts;