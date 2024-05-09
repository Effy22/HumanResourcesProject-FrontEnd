const rootAuth= 'http://localhost:9091';
const rootManager= 'http://localhost:9095';
const rootCompany= 'http://localhost:9093';
const rootLeave= 'http://localhost:9096';

const restApi = {
    authUrl: rootAuth + '/dev/v1/auth',
    managerUrl: rootManager + '/dev/v1/manager',
    companyUrl: rootCompany + '/dev/v1/company',
    managerLeaveUrl: rootLeave + "/dev/v1/requirements/manager",
    employeeLeaveUrl: rootLeave + "/dev/v1/requirements/employee"
};

export default restApi;