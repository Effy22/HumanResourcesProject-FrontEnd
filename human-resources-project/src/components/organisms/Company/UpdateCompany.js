import  React, { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchUpdateCompany } from "../../../store/feautures/companySlice";


  function UpdateCompany({ companyId, initialCompany, onUpdate = () => {}, onClose }) {
    const dispatch = useDispatch();

    const [updatedCompany, setUpdatedCompany] = useState(initialCompany || {});

    const token=localStorage.getItem('jwtToken');

    useEffect(() => {
        setUpdatedCompany({ ...initialCompany, id: companyId });
    }, [initialCompany, companyId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCompany({ ...updatedCompany, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUpdateCompany({ ...updatedCompany, token }))
            .then(() => {
                onUpdate(updatedCompany);
                onClose();
            })
            .catch((error) => {
                console.error('Error updating company:', error);
            });
    };

   /* const update = () => {
        dispatch(fetchUpdateCompany(updatedCompany));
        onClose(); // Güncelleme işlemi tamamlandığında pencereyi kapat
    };   onClick={update} */




  return (
    <>      

    <h2>Update Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="column-update">
        <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>ID</label>
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="ID"
                    name="id"
                    value={updatedCompany.id || ''}
                    onChange={handleChange}
                />
            </div>
    
            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>Name</label>
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="Name"
                    name="name"
                    value={updatedCompany.name || ''}
                    onChange={handleChange}
                />
            </div>

             <div className="mb-3">
                <label className="form-label lbl " style={{ display: 'block' }}>Tax Number</label>
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="Tax Number"
                    name="taxNumber"
                    value={updatedCompany.taxNumber || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>Tittle</label>
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="Tittle"
                    name="title"
                    value={updatedCompany.title || ''}
                    onChange={handleChange}
                />
            </div>

           
            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>Address</label>
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="Address"
                    name="address"
                    value={updatedCompany.address || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>Phone Number</label>
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="Phone Number"
                    name="phone"
                    value={updatedCompany.phone || ''}
                    onChange={handleChange}
                />
            </div>
            

            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>E-Mail</label>
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="E-Mail"
                    name="email"
                    value={updatedCompany.email || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>Web Site</label>
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="Web Site"
                    name="website"
                    value={updatedCompany.website || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>Employee Count</label>
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="Employee Count"
                    name="employeeCount"
                    value={updatedCompany.employeeCount || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label lbl" style={{ display: 'block' }}>Sector</label>
                <input
                    type="text"
                    className="form-control inpt"
                    name="sector"
                    value={updatedCompany.sector || ''}
                    onChange={handleChange}
                />
            </div>
        



            <div className="mb-3">
                <button  type="submit" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Update</button>
            </div>
        </div>

        </form>
    </>
    
  );
}

export default UpdateCompany;