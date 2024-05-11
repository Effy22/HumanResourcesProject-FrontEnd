/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UpdateCompanyForm from './UpdateCompanyForm';
import { fetchUpdateCompany } from '../../../store/feautures/companySlice';

function UpdateCompany() {
  const dispatch = useDispatch();
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleUpdateButtonClick = (company) => {
    setSelectedCompany(company);
  };

  const handleUpdate = (updatedCompany) => {
    dispatch(fetchUpdateCompany(updatedCompany));
    setSelectedCompany(null);
  };

  return (
    <div>
      {selectedCompany ? (
        <UpdateCompanyForm company={selectedCompany} onUpdate={handleUpdate} />
      ) : (
        <p>Select a company to update</p>
      )}
    </div>
  );
}


<div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Tax Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tax Number"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            taxNumber: evt.target.value,
                        });
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Tax Office</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tax Office"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            taxOffice: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Mersis Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Mersis Number"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            mersisNo: evt.target.value,
                        });
                    }}
                />
            </div>
            

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Vision</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Vision"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            vision: evt.target.value,
                        });
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Mission</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Mission"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            mission: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Country</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            country: evt.target.value,
                        });
                    }}
                />
            </div>
            

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>City</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            city: evt.target.value,
                        });
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Employee Count</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Employee Count"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            employeeCount: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Founded</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Founded"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            founded: evt.target.value,
                        });
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Founding Year</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Founding Year"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            foundingYear: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Linkedin</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Linkedin"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            linkedin: evt.target.value,
                        });
                    }}
                />
            </div>
            

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Membership Plan</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Membership Plan"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            membershipPlan: evt.target.value,
                        });
                    }}
                />
            </div>

export default UpdateCompany;*/