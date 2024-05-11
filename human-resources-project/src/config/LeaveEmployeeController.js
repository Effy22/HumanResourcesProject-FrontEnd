import restApi from './RestApis';

const leaveEmployeeUrl = {
    findAllMyLeaves: restApi.employeeLeaveUrl + '/find-all-my-leaves',
    requestLeave: restApi.employeeLeaveUrl + '/request-leave',
 
}

export default leaveEmployeeUrl;