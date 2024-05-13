import restApi from "./RestApis";

const employeeUrl = {
    updateEmployee: restApi.employeeUrl + '/update-employee',
    managerAdminUpdateEmployee: restApi.employeeUrl + '/manager-or-admin-update-employee',
    getEmployees: restApi.employeeUrl + '/get-employees-by-manager-id',
    findByIdEmployee: restApi.employeeUrl + '/find-by-id',
    updateSalaryEmployee: restApi.employeeUrl + '/update-salary-employee',
    activateEmployee: restApi.employeeUrl + '/activate-employee',
    deactivateEmployee: restApi.employeeUrl + '/deactivate-employee'

}

export default employeeUrl;
