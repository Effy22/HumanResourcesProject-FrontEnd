import restApi from './RestApis';

const authUrl = {
    registerManager: restApi.authUrl + '/register-manager',
    registerEmployee: restApi.authUrl + '/register-employee',
    login: restApi.authUrl + '/login'
};

export default authUrl;