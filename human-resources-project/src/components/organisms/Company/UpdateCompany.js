import  React, { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { fetchUpdateCompany } from "../../../store/feautures/companySlice";



function UpdateCompany() {
  const dispatch = useDispatch();
  const [company, setCompany] = useState({
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
  };


  

  return (
    <>
        <div className="column-addleave">
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            name: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Tittle</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tittle"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            title: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Description</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Identity Number"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            description: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Address</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            address: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            phone: evt.target.value,
                        });
                    }}
                />
            </div>
            

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>E-Mail</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="E-Mail"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            email: evt.target.value,
                        });
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Web Site</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Web Site"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            website: evt.target.value,
                        });
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Logo</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Logo"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            logo: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Sector</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Sector"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            sector: evt.target.value,
                        });
                    }}
                />
            </div>
            

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

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Status</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Status"
                    onChange={(evt) => {
                        setCompany({
                            ...company,
                            status: evt.target.value,
                        });
                    }}
                />
            </div>



            <div className="mb-3">
                <button onClick={update} type="button" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Update</button>
            </div>
        </div>
    </>
    
  );
}

export default React.memo(UpdateCompany);