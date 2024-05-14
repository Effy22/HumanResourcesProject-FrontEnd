import restApi from './RestApis';

const authUrl = {
    registerManager: restApi.authUrl + '/register-manager',
    registerEmployee: restApi.authUrl + '/register-employee',
    changePassword: restApi.authUrl + '/change-password',
    login: restApi.authUrl + '/login'
    
};

export default authUrl;