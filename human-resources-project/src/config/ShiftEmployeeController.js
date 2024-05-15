import restApi from "./RestApis";

const shiftEmployeeUrl = {
    findAllMyShifts: restApi.employeeRequirementsUrl + '/get-all-my-shifts',
}

export default shiftEmployeeUrl;