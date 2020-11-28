const HOST = 'http://localhost:8080';

export const CONSTANST = {
    permissions: {},
    routes: {
        authorization: {
            login: HOST + '/api/auth/signin',
            logout: HOST + '/api/auth/logout'
        },
        client: {
            list: HOST + '/api/client',
            delete: HOST + '/api/client/delete/:id',
            save: HOST + '/api/client/save',
            get: HOST + '/api/client/:id'
        },
        user: {}
    },
    lang: {},
    session: {},
    parameters: {}
};
