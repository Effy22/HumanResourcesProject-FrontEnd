import { useDispatch, useSelector } from 'react-redux';

function FindAllMyLeave(){
    const dispatch = useDispatch();
    const allLeaveList = useSelector(state => state.leaveEmployee.allLeaveList);
    

    /*if (!allLeaveList) {
      return <div className="loadingList">Loading...</div>;
    }*/
    return(
        <>
            <div className="rowT">
        <table className="company-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Leave Type</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            {allLeaveList.map((data, index) => (
              <tr key={index}>
                <th scope="row">{data.id}</th>
                <td>{data.startDate}</td>
                <td>{data.endDate}</td>
                <td>{data.leaveType}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
        
    );  
}

export default FindAllMyLeave;
