import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { fetchAddLeave } from "../../../store/feautures/leaveManagerSlice";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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
        COMPASSIONATE_LEAVE: 'COMPASSIONATE_LEAVE',
        EMERGENCY_LEAVE: 'EMERGENCY_LEAVE',
        VOLUNTEERING_LEAVE: 'VOLUNTEERING_LEAVE',
        PUBLIC_HOLIDAY: 'PUBLIC_HOLIDAY',
        WORK_FROM_HOME: 'WORK_FROM_HOME',
        FURLOUGH: 'FURLOUGH'
        // Diğer izin türleri buraya eklenebilir
    };
    
    const dispatch = useDispatch();
    
    const [leave, setLeave] = useState({
        employeeId: 0.0,
        startDate: 0,
        endDate: 0,
        leaveType: LeaveTypes.ANNUAL_LEAVE,
    });

    const addLeave = ()=>{
        dispatch(fetchAddLeave(leave));
    };

    const convertToLong = (dateString) => {

        const date = new Date(dateString);
        return isNaN(date.getTime()) ? 0 : date.getTime();
    };

    const handleStartDateChange = (evt) => {
        setLeave({
            ...leave,
            startDate: convertToLong(evt.target.value),
        });
    };

    const handleEndDateChange = (evt) => {
        setLeave({
            ...leave,
            endDate: convertToLong(evt.target.value),
        });
    };

    const handleLeaveTypeChange = (event) => {
        setLeave({
          ...leave,
          leaveType: event.target.value
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
                <label className="form-label" style={{ display: 'block' }}>Start Date</label>
                <ReactDatePicker
                        selected={leave.startDate}
                        onChange={handleStartDateChange}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                    />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>End Date</label>
                <ReactDatePicker
                        selected={leave.endDate}
                        onChange={handleEndDateChange}
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
