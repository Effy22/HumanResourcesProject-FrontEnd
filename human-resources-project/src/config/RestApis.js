const rootAuth= 'http://localhost:9091';
const rootManager= 'http://localhost:9095';
const rootCompany= 'http://localhost:9093';
const rootRequirements= 'http://localhost:9096';
const rootEmployee='http://localhost:9094';

const restApi = {
    authUrl: rootAuth + '/dev/v1/auth',
    managerUrl: rootManager + '/dev/v1/manager',
    companyUrl: rootCompany + '/dev/v1/company',
    employeeUrl: rootEmployee + '/dev/v1/employee',
    managerRequirementsUrl: rootRequirements + "/dev/v1/requirements/manager",
    employeeRequirementsUrl: rootRequirements + "/dev/v1/requirements/employee"
};

export default restApi;