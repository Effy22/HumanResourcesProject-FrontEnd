import  React, { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchUpdateEmployee } from "../../../store/feautures/employeeSlice";

function UpdateEmplopee({ employeeId, initialEmployee, onUpdate, onClose }) {
    const dispatch = useDispatch();

    const [updatedEmployee, setUpdatedEmployee] = useState(initialEmployee || {});

    useEffect(() => {
        setUpdatedEmployee({ ...initialEmployee, id: employeeId });
    }, [initialEmployee, employeeId]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedEmployee({ ...updatedEmployee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedEmployee);
        dispatch(fetchUpdateEmployee(updatedEmployee));
        //onClose();
    };
    

    const update = () => {
        dispatch(fetchUpdateEmployee(updatedEmployee));
        //onClose();
    };

    return (
        <>      
    
        <h2>Update Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="column-addleave">
            <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>ID</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ID"
                        value={updatedEmployee.id}
                        onChange={handleChange}
                    />
                </div>
        
                <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={updatedEmployee.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>Surname</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Surname"
                        value={updatedEmployee.surname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>Birth Date</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Birth Date"
                        value={updatedEmployee.birthDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        value={updatedEmployee.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        value={updatedEmployee.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                
    
                <div className="mb-3">
                    <label className="form-label" style={{ display: 'block' }}>Avatar</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Avatar"
                        value={updatedEmployee.avatar}
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

export default UpdateEmplopee;