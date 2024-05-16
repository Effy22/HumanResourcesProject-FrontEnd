import restApi from "./RestApis";

const shiftManagerUrl = {
    addShift: restApi.managerRequirementsUrl + '/add-shift',
    findShiftOfEmployee: restApi.managerRequirementsUrl + '/get-shift-of-employee',
    findAllShiftsOfEmployee: restApi.managerRequirementsUrl + '/get-all-shifts-of-employee',
}

export default shiftManagerUrl;