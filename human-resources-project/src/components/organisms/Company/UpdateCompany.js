import  React, { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchUpdateCompany } from "../../../store/feautures/companySlice";


 /* const [company, setCompany] = useState({
    id: "",
    managerId: "",
    name: "",
    title: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    logo: "",
    sector: "",
    taxNumber: "",
    taxOffice: "",
    mersisNo: "",
    vision: "",
    mission: "",
    country: "",
    city: "",
    employeeCount: "",
    founded: "",
    foundingYear: "",
    linkedin: "",
    membershipPlan: "",
    status: ""
  });

  const update = () => {
    setCompany({
        ...company
    });
    dispatch(fetchUpdateCompany(company));
  }; */


  function UpdateCompany({ companyId, initialCompany, onUpdate, onClose }) {
    const dispatch = useDispatch();
    

    const [updatedCompany, setUpdatedCompany] = useState(initialCompany || {});

    useEffect(() => {
        setUpdatedCompany({ ...initialCompany, id: companyId });
    }, [initialCompany, companyId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCompany({ ...updatedCompany, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedCompany);
        dispatch(fetchUpdateCompany(updatedCompany));
    };

    const update = () => {
        dispatch(fetchUpdateCompany(updatedCompany));
        onClose(); // Güncelleme işlemi tamamlandığında pencereyi kapat
    };




  return (
    <>      

    <h2>Update Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="column-addleave">
        <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>ID</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={updatedCompany.id || ''}
                    onChange={handleChange}
                />
            </div>
    
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={updatedCompany.name || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Tittle</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tittle"
                    value={updatedCompany.title}
                    onChange={handleChange}
                />
            </div>




            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Description</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Identity Number"
                    value={updatedCompany.description}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Address</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={updatedCompany.address}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    value={updatedCompany.phone}
                    onChange={handleChange}
                />
            </div>
            

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>E-Mail</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="E-Mail"
                    value={updatedCompany.email}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Web Site</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Web Site"
                    value={updatedCompany.website}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Logo</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Logo"
                    value={updatedCompany.logo}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Sector</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Sector"
                    value={updatedCompany.sector}
                    onChange={handleChange}
                />
            </div>
        



            <div className="mb-3">
                <button onClick={update} type="button" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Update</button>
            </div>
        </div>

        </form>
    </>
    
  );
}

export default UpdateCompany;