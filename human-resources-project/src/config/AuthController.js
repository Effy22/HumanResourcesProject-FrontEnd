import restApi from './RestApis';

const authUrl = {
    registerManager: restApi.authUrl + '/register-manager',
    login: restApi.authUrl + '/login'
};

export default authUrl;