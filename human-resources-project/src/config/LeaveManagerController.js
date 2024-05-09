import restApi from './RestApis';

const leaveManagerUrl = {
    addLeave: restApi.managerLeaveUrl + '/add-leave',
    approveLeave: restApi.managerLeaveUrl + '/approve-leave',
    rejectLeave: restApi.managerLeaveUrl + '/reject-leave',
    getAllLeavesOfEmployee: restApi.managerLeaveUrl + '/get-all-leaves-of-employee',
    getAllPendingLeavesOfEmployees: restApi.managerLeaveUrl + "/get-all-pending-leaves-of-employees"
}

export default leaveManagerUrl;