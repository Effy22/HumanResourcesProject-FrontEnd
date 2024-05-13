import  React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterEmployee } from "../../../store/feautures/authSlice";

function AddEmployee() {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState({
    token: '',
    managerId: '',
    name: '',
    surname: '',
    identityNumber: '',
    phoneNumber: '',
    address: '',
    position: '',
    department: '',
    companyName: '',
    jobStartDate: 0,
    occupation: ''
  });

  

  const takenToken = localStorage.getItem('jwtToken');

  const addEmployee = () => {
    setEmployee({
        ...employee,
        token: takenToken,
    });
    dispatch(fetchRegisterEmployee(employee))
    .then(() => {
        alert('Kullanıcı başarıyla eklendi');
    })
    .catch((error) => {
        console.error('Kullanıcı eklenirken hata oluştu:', error);
        alert('Kullanıcı eklenirken bir hata oluştu');
    });
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
                        setEmployee({
                            ...employee,
                            name: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Surname</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Surname"
                    onChange={(evt) => {
                        setEmployee({
                            ...employee,
                            surname: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Identity Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Identity Number"
                    onChange={(evt) => {
                        setEmployee({
                            ...employee,
                            identityNumber: evt.target.value,
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
                        setEmployee({
                            ...employee,
                            phoneNumber: evt.target.value,
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
                        setEmployee({
                            ...employee,
                            address: evt.target.value,
                        });
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Position</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Position"
                    onChange={(evt) => {
                        setEmployee({
                            ...employee,
                            position: evt.target.value,
                        });
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Department</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Department"
                    onChange={(evt) => {
                        setEmployee({
                            ...employee,
                            department: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Company Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    onChange={(evt) => {
                        setEmployee({
                            ...employee,
                            companyName: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Job Start Date</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Job Start Date"
                    onChange={(evt) => {
                        setEmployee({
                            ...employee,
                            jobStartDate: evt.target.value,
                        });
                    }}
                />
            </div>

            <div className="mb-3">
                <button onClick={addEmployee} type="button" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Add Employee</button>
            </div>
        </div>
    </>
    
  );
}

export default React.memo(AddEmployee);
