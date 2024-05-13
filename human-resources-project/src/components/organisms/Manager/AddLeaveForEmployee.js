import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { fetchAddLeave } from "../../../store/feautures/leaveManagerSlice";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Manager Employee'ye izin ekliyor.
function AddLeaveForEmployee (){
    const LeaveTypes = {
        ANNUAL_LEAVE: 'ANNUAL_LEAVE',
        SICK_LEAVE: 'SICK_LEAVE',
        UNPAID_LEAVE: 'UNPAID_LEAVE',
        MATERNITY_LEAVE: 'MATERNITY_LEAVE',
        PATERNITY_LEAVE: 'PATERNITY_LEAVE',
        FAMILY_LEAVE: 'FAMILY_LEAVE',
        BEREAVEMENT_LEAVE: 'BEREAVEMENT_LEAVE',
        STUDY_LEAVE: 'STUDY_LEAVE',
        HALF_DAY_LEAVE: 'HALF_DAY_LEAVE',
        SPECIAL_LEAVE: 'SPECIAL_LEAVE',
        COMPASSIONATE_LEAVE: 'COMPASSIONATE_LEAVE'
    };

    const mapLeaveTypeToEnum = (selectedType) => {
        switch (selectedType) {
            case 'ANNUAL_LEAVE':
                return 0;
            case 'SICK_LEAVE':
                return 1;
            case 'UNPAID_LEAVE':
                return 2;
            case 'MATERNITY_LEAVE':
                return 3;
            case 'PATERNITY_LEAVE':
                return 4;
            case 'FAMILY_LEAVE':
                return 5;
            case 'BEREAVEMENT_LEAVE':
                return 6;
            case 'STUDY_LEAVE':
                return 7;
            case 'HALF_DAY_LEAVE':
                return 8;
            case 'SPECIAL_LEAVE':
                return 9;
            case 'COMPASSIONATE_LEAVE':
                return 10;   
            default:
                return null; // Belirsiz veya hatalı durumlar için null veya başka bir değer dönebilirsiniz
        }
    };
    
    const dispatch = useDispatch();
    
    const [leave, setLeave] = useState({
        employeeId: 0.0,
        startDate: null,
        endDate: null,
        employeeName: '',
        employeeSurname: '',
        leaveType: LeaveTypes.ANNUAL_LEAVE,
    });
    const [startDateNew, setStartDateNew] = useState(new Date());
    const [endDateNew, setEndDateNew] = useState(new Date());

    const takenToken = localStorage.getItem('jwtToken');
    const addLeave = ()=>{
     
        setLeave({
            ...leave,
            token: takenToken,
            startDate: startDateNew,
            endDate: endDateNew
        })

        dispatch(fetchAddLeave(leave))
        .then(() => {
            alert('İzin başarıyla eklendi');
        })
        .catch((error) => {
            console.error('İzin eklenirken hata oluştu:', error);
            alert('İzin eklenirken bir hata oluştu');
        });
    };

    const handleLeaveTypeChange = (event) => {
        setLeave({
            ...leave,
            leaveType: mapLeaveTypeToEnum(event.target.value),
        });
    };


  return (
    <>
        <div className="column-addleave">
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Çalışan ID</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="0.0"
                    onChange={(evt) => {
                        setLeave({
                            ...leave,
                            employeeId: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Employee Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(evt) => {
                        setLeave({
                            ...leave,
                            employeeName: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Employee Surname</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Surname"
                    onChange={(evt) => {
                        setLeave({
                            ...leave,
                            employeeSurname: evt.target.value,
                        });
                    }}
                />
            </div>
       
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Start Date</label>
                <ReactDatePicker
                    selected={startDateNew}
                    onChange={(date) => {
                        const formattedDate = date.toISOString().split('T')[0];
                        setStartDateNew(formattedDate);
                    }}
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                />

            </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>End Date</label>
                <ReactDatePicker
                    selected={endDateNew}
                    onChange={(date) => {
                        const formattedDate = date.toISOString().split('T')[0];
                        setEndDateNew(formattedDate);
                    }}
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                />

            </div>
            
            <div className="mb-3">
                <label htmlFor="leaveType" className="form-label">Leave Type</label>
                    <select
                    id="leaveType"
                    className="form-select"
                    value={leave.leaveType}
                    onChange={handleLeaveTypeChange}
                    >
                    {Object.values(LeaveTypes).map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                    </select>
             </div>
            <div className="mb-3">
                <button onClick={addLeave} type="button" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Add Leave For an Employee</button>
            </div>
        </div>
      
    </>
  )
}

export default React.memo(AddLeaveForEmployee);
