import { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import {fetchRequestLeave} from "../../../store/feautures/leaveEmployeeSlice";

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
    

    //const newToken = useSelector(state => state.auth.token);

    const requestLeave = () => {
        setLeave({
            ...leave, 
            //token: newToken,
        });
        dispatch(fetchRequestLeave(leave));
    }

    return(
    <>
        <div className="column-addleave">
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Start Date</label>
                <input
                        type="date"
                        className="form-control"
                        placeholder="Start Date"
                        onChange={(evt) => {
                            setLeave({
                                ...leave,
                                startDate: evt.target.value,
                            });
                        }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>End Date</label>
                <input
                    type="date"
                    className="form-control"
                    placeholder="End Date"
                    onChange={(evt) => { 
                        setLeave({
                            ...leave,
                            endDate: evt.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Leave Type</label>
                <select
                    className="form-control"
                    onChange={(evt) => {
                        setLeave({
                            ...leave,
                            leaveType: evt.target.value,
                        });
                    }}
                >
                    <option value="">Select Leave Type</option>
                    <option value={LeaveTypes.ANNUAL_LEAVE}>Annual Leave</option>
                    <option value={LeaveTypes.SICK_LEAVE}>Sick Leave</option>
                    <option value={LeaveTypes.UNPAID_LEAVE}>Unpaid Leave</option>
                    <option value={LeaveTypes.FAMILY_LEAVE}>Family Leave</option>
                    <option value={LeaveTypes.HALF_DAY_LEAVE}>Half Day Leave</option>
                    <option value={LeaveTypes.COMPASSIONATE_LEAVE}>Compassionate Leave</option>
                    <option value={LeaveTypes.WORK_FROM_HOME}>Work From Home</option>
                    <option value={LeaveTypes.FURLOUGH}>Furlough</option>
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

            <input onClick={requestLeave} type="button" value="Request Leave" className="btn solid" />
        </div>
    </>
    )
};

export default AddLeave;