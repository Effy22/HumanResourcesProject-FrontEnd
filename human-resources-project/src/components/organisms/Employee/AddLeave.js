import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import {fetchRequestLeave} from "../../../store/feautures/leaveEmployeeSlice";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddLeave(){
    const dispatch= useDispatch();
    const [leave, setLeave] =useState({
        token: "",
        startDate: "",
        endDate: "",
        leaveType: "",
        document: "",
    });

    const LeaveTypes = {
        ANNUAL_LEAVE: "ANNUAL_LEAVE",
        SICK_LEAVE: "SICK_LEAVE",
        UNPAID_LEAVE: "UNPAID_LEAVE",
        FAMILY_LEAVE: "FAMILY_LEAVE",
        HALF_DAY_LEAVE: "HALF_DAY_LEAVE",
        COMPASSIONATE_LEAVE: "COMPASSIONATE_LEAVE",
        WORK_FROM_HOME: "WORK_FROM_HOME",
        FURLOUGH: "FURLOUGH"
    };

    const mapLeaveTypeToEnum = (selectedType) => {
        switch (selectedType) {
            case "ANNUAL_LEAVE":
                return 0;
            case "SICK_LEAVE":
                return 1;
            case "UNPAID_LEAVE":
                return 2;
            case "FAMILY_LEAVE":
                return 3;
            case "HALF_DAY_LEAVE":
                return 4;
            case "COMPASSIONATE_LEAVE":
                return 5;
            case "WORK_FROM_HOME":
                return 6;
            case "FURLOUGH":
                return 7;
            default:
                return null; 
        }
    };
    

    const takenToken = localStorage.getItem('jwtToken');
    const [startDateNew, setStartDateNew] = useState(new Date());
    const [endDateNew, setEndDateNew] = useState(new Date());

    const requestLeave = () => {
        setLeave({
            ...leave,
            startDate: startDateNew,
            endDate: endDateNew, 
            token: takenToken,
        });
        dispatch(fetchRequestLeave(leave))
        .then(() => {
            console.log('token geldi mi addLeave dispatch sonrası?', takenToken);
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

    return(
    <>
        <div className="column-addleave">
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
                <label className="form-label" style={{ display: 'block' }}>Document</label>
                <input
                        type="text"
                        className="form-control"
                        placeholder="Document"
                        onChange={(evt) => {
                            setLeave({
                                ...leave,
                                document: evt.target.value,
                            });
                        }}
                />
            </div>

            <button onClick={requestLeave} type="button" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Add Leave</button>
        </div>
    </>
    )
};

export default React.memo(AddLeave);