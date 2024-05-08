import React, { useState } from "react";
import { useSelector} from "react-redux";
import ApproveCompany from "./ApproveCompany";


function CompanyApplingList (){
  const companyApplingList= useSelector(state => state.company.companyApplingList);

  const handleApprove = (companyId) => {
    <ApproveCompany />
    console.log("Şirket onaylandı:", companyId);
  };

  const handleReject = (companyId) => {
    // Reddetme işlemlerini gerçekleştirmek için companyId'yi kullanabilirsiniz
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
                        <td> {/* Yeni sütun hücresi */}
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