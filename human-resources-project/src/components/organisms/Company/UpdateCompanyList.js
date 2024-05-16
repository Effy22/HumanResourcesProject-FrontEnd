import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from "react";
import UpdateCompany from './UpdateCompany';


function UpdateList (){

  const dispatch=useDispatch();
  const companyList= useSelector(state => state.company.companyList);

  const [isUpdateCompanyOpen, setIsUpdateCompanyOpen] = useState(false);
  const [initialCompany, setInitialCompany] = useState(null);

  const handleUpdateButtonClick = (companyId) => {
    const company = companyList.find(company => company.id === companyId);
    setInitialCompany(company);
    setIsUpdateCompanyOpen(true);
  };

  const handleUpdateCompanyClose = () => {
    setIsUpdateCompanyOpen(false);
  };

  return (
    <>
    {isUpdateCompanyOpen ? (
        <UpdateCompany companyId={initialCompany.id} initialCompany={initialCompany} onClose={handleUpdateCompanyClose} />
      ) : (
      <div className="rowT">
        <table className="company-table ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Tax Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companyList.map((data, index) => (
              <tr key={index}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.taxNumber}</td>
                <td>
                  <button onClick={() => handleUpdateButtonClick(data.id)} className="btn-app">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    </>
  );
}

export default UpdateList;