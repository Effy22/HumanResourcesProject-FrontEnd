import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux";


function CompanyList (){

  const dispatch=useDispatch();
  const companyList= useSelector(state => state.company.companyList);
  



  return (
    <>
      <div className="rowT">
        <table className="company-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Tax Number</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Sector</th>
              <th scope="col">Employee Count</th>

            </tr>
          </thead>
          <tbody>
            {companyList.map((data, index) => (
              <tr key={index}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.taxNumber}</td>
                <td>{data.address}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.sector}</td>
                <td>{data.employeeCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CompanyList;