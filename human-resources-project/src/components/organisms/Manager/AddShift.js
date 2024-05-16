import  React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAddShift } from "../../../store/feautures/shiftManagerSlice";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddShift() {
    const dispatch = useDispatch();
    const [shift, setShift] = useState({
        token: '',
        employeeId: '',
        startTime: '',
        endTime: '',
        shiftType: '',
        status: ''
    });

    const ShiftTypes = {
        MORNING_SIX_TO_TWELVE: "MORNING SIX TO TWELVE",
        AFTERNOON_TWELVE_TO_SIX: "AFTERNOON TWELVE TO SIX",
        EVENING_SIX_TO_TWELVE: "EVENING SIX TO TWELVE",
        NIGHT_TWELVE_TO_SIX: "NIGHT TWELVE TO SIX",
        FULL_DAY_NINE_TO_SIX: "FULL DAY NINE TO SIX",
        FULL_DAY_EIGHT_TO_FIVE: "FULL DAY EIGHT TO FIVE",
        WEEKEND_NINE_TO_ONE: "WEEKEND NINE TO ONE",
        WEEKEND_EIGHT_TO_TWELVE: "WEEKEND EIGHT TO TWELVE",
        WEEKEND_AFTERNOON: "WEEKEND AFTERNOON"
    };

    const mapShiftTypeToEnum = (selectedType) => {
        switch (selectedType) {
            case "MORNING SIX TO TWELVE":
                return 0;
            case "AFTERNOON TWELVE TO SIX":
                return 1;
            case "EVENING SIX TO TWELVE":
                return 2;
            case "NIGHT TWELVE TO SIX":
                return 3;
            case "FULL DAY NINE TO SIX":
                return 4;
            case "FULL DAY EIGHT TO FIVE":
                return 5;
            case "WEEKEND NINE TO ONE":
                return 6;
            case "WEEKEND EIGHT TO TWELVE":
                return 7;
            case "WEEKEND AFTERNOON":
                return 8;
            default:
    }
    };

    const takenToken = localStorage.getItem('jwtToken');
    const[startTimeNew, setStartTimeNew] = useState(new Date());
    const[endTimeNew, setEndTimeNew] = useState(new Date());

    const addShift = () => {
        setShift({
            ...shift,
            startTime: startTimeNew,
            endTime: endTimeNew,
            token: takenToken,
        });
        dispatch(FetchAddShift(shift))
        .then(() => {
            console.log("Shift added successfully");
        })
        .catch((error) => {
            console.log("Error while adding shift",error);
        });
    };

    const handleShiftTypeChange = (event) => {
        setShift({
            ...shift,
            shiftType: mapShiftTypeToEnum(event.target.value),
        });
    };

    return(
        <>
        <div className="column-addleave">
        <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Start Time</label>
                <ReactDatePicker
                    selected={startTimeNew}
                    onChange={(date) => {
                        const formattedDate = date.toISOString().split('T')[0];
                        setStartTimeNew(formattedDate);
                    }}
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                />

            </div>
            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>End Time</label>
                <ReactDatePicker
                    selected={endTimeNew}
                    onChange={(date) => {
                        const formattedDate = date.toISOString().split('T')[0];
                        setEndTimeNew(formattedDate);
                    }}
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                />

            </div>

            <div className="mb-3">
                <label htmlFor="shiftType" className="form-label">Shift Type</label>
                    <select
                    id="shiftType"
                    className="form-select"
                    value={shift.shiftType}
                    onChange={handleShiftTypeChange}
                    >
                    {Object.values(ShiftTypes).map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                    </select>
             </div>

            <div className="mb-3">
                <label className="form-label" style={{ display: 'block' }}>Employee ID</label>
                <input
                        type="text"
                        className="form-control"
                        placeholder="Employee ID"
                        onChange={(evt) => {
                            setShift({
                                ...shift,
                                employeeId: evt.target.value,
                            });
                        }}
                />
            </div>

            <button onClick={addShift} type="button" className="btn btn-success" style={{ display: 'block', width: '100%' }}>Add Shift</button>
        </div>
    </>

    )

};

export default React.memo(AddShift);
