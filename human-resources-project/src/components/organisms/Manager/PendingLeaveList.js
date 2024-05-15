import React from "react";
import {useSelector} from "react-redux";


function PendingLeaveList (){

 
  const pendingLeavesList= useSelector(state => state.leaveManager.pendingLeaveList);

  if (!pendingLeavesList || pendingLeavesList.length === 0) {
    return <div>No pending leaves found.</div>;
  }
  
  return (
    <>
      <div className="rowT">
        <table className="company-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Employee Id </th>
              <th scope="col">Company Id</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Approval Date</th>
              <th scope="col">Status</th>
              <th scope="col">Number Of Days</th>
              <th scope="col">Document</th>
            </tr>
          </thead>
          <tbody>
            {pendingLeavesList.map((data, index) => (
              <tr key={index}>
                <th scope="row">{data.id}</th>
                <td>{data.employeeId}</td>
                <td>{data.companyId}</td>
                <td>{data.startDate}</td>
                <td>{data.endDate}</td>
                <td>{data.approvalDate}</td>
                <td>{data.status}</td>
                <td>{data.numberOfDays}</td>
                <td>{data.document}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PendingLeaveList;

