import restApi from './RestApis';

const leaveManagerUrl = {
    addLeave: restApi.managerRequirementsUrl + '/add-leave',
    approveLeave: restApi.managerRequirementsUrl + '/approve-leave',
    rejectLeave: restApi.managerRequirementsUrl + '/reject-leave',
    getAllLeavesOfEmployee: restApi.managerRequirementsUrl + '/get-all-leaves-of-employee',
    getAllPendingLeavesOfEmployees: restApi.managerRequirementsUrl + "/get-all-pending-leaves-of-employees"
}

export default leaveManagerUrl;