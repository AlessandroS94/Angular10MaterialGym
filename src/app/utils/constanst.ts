const HOST = 'http://localhost:8080';
const HOSTLOGED = 'http://localhost:8080/gym';
export const CONSTANST = {
    permissions: {},
    routes: {
        authorization: {
            login: HOST + '/api/auth/signin',
            registration: HOST + '/api/auth/register'
        },
        user: {},
        alimenti: {
            insert: HOSTLOGED + '/api/v1/alimenti'
        },
        esercizio: {
            insert: HOSTLOGED + '/api/v1/esercizi',
            list: HOSTLOGED + '/api/v1/esercizi'
        }
    },
    lang: {},
    session: {},
    parameters: {}
};
