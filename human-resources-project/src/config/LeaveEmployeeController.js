import restApi from './RestApis';

const leaveEmployeeUrl = {
    findAllMyLeaves: restApi.employeeRequirementsUrl + '/find-all-my-leaves',
    requestLeave: restApi.employeeRequirementsUrl + '/request-leave',
 
}

export default leaveEmployeeUrl;