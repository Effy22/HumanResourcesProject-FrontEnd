import { useSelector} from "react-redux";
import { useDispatch} from 'react-redux';
import { fetchApproveCompany, fetchRejectCompany } from '../../../store/feautures/companySlice'


function CompanyApplingList (){
  const dispatch=useDispatch();
  const companyApplingList= useSelector(state => state.company.companyApplingList);

  const handleApprove = (companyId) => {
    // Şirketi onaylamak için backend'e istek yapma
    dispatch(fetchApproveCompany(companyId)); // Şirketi onaylamak için companyId'yi parametre olarak geçiyoruz
    console.log("Şirket onaylandı:", companyId);
  };
  
  const handleReject = (companyId) => {
    // Şirketi reddetmek için backend'e istek yapma
    dispatch(fetchRejectCompany(companyId)); // Şirketi reddetmek için companyId'yi parametre olarak geçiyoruz
    console.log("Şirket reddedildi:", companyId);
  };

    return(
        <>
          <div className="rowT">
            <table className="company-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Manager Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Tax Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th> 
                  </tr>
                </thead>
                  <tbody>
                    {companyApplingList.map((company,index) => (
                      <tr key={index}>
                        <th scope="row">{company.id}</th>
                        <td>{company.managerId}</td>
                        <td>{company.name}</td>
                        <td>{company.taxNumber}</td>
                        <td>{company.status}</td>
                        <td> 
                          <button onClick={() => handleApprove(company.id)}>Approve</button>
                          <button onClick={() => handleReject(company.id)}>Reject</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
            </table>
          </div>
            
        
    
        </>
    )
};

export default CompanyApplingList;