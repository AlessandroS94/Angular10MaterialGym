import {Host} from '@angular/core';

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
        esercizio: {
            save: HOSTLOGED + '/api/v1/esercizi',
            list: HOSTLOGED + '/api/v1/esercizi',
            delete: HOSTLOGED + '/api/v1/esercizi/'
        },
        utenti: {
            findAll: HOSTLOGED + '/api/v1/utenti/user',
        },
        scheda: {
            insert: HOSTLOGED + '/api/v1/schede',
            list: HOSTLOGED + '/api/v1/schede',
            delete: HOSTLOGED + '/api/v1/schede/',
            find: HOSTLOGED + '/api/v1/utenti/',
            getUser: HOSTLOGED + '/api/v1/schede/'
        },
        alimenti: {
            save: HOSTLOGED + '/api/v1/alimenti',
            list: HOSTLOGED + '/api/v1/alimenti',
            delete: HOSTLOGED + '/api/v1/alimenti/'
        },
        diete: {
            insert: HOSTLOGED + '/api/v1/diete',
            list: HOSTLOGED + '/api/v1/diete',
            delete: HOSTLOGED + '/api/v1/diete/',
            find: HOSTLOGED + '/api/v1/utenti/',
            getUser: HOSTLOGED + '/api/v1/diete/'
        },
    },
    lang: {},
    session: {},
    parameters: {}
};
