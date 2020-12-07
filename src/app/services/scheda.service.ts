import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Response} from '../models/response';
import {CONSTANST} from '../utils/constanst';
import {catchError, retry} from 'rxjs/operators';
import {Scheda} from '../models/scheda';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class SchedaService {

    constructor(
        public http: HttpClient
    ) {
    }

    public isSuccess = new BehaviorSubject<boolean>(this.hasToken());

    // tslint:disable-next-line:typedef
    get isSuccessed() {
        return this.isSuccess.asObservable();
    }

    headers = new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
    });

    addScheda(scheda: Scheda): Observable<Response> {
        // @ts-ignore
        return this.http.post<Response>(
            CONSTANST.routes.scheda.insert, {
                descrizione: scheda.descrizione,
                nome: scheda.nome,
                dataIserimento: scheda.dataInserimento,
                utente: scheda.utente,
                esercizi: scheda.esercizi,
                info : scheda.info
            }, {headers: this.headers}).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    findAll(): Observable<any[]> {
        // @ts-ignore
        return this.http.get<Scheda[]>(CONSTANST.routes.scheda.list, {headers: this.headers}).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    getUser(id: number): Observable<User[]> {
        // @ts-ignore
        return this.http.get<User>(CONSTANST.routes.scheda.getUser + id + '/utente', {headers: this.headers}).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    delete(scheda: Scheda | number): Observable<any> {
        const idx = typeof scheda === 'number' ? scheda : scheda.id;
        return this.http.delete<Scheda>(CONSTANST.routes.scheda.delete + idx, {headers: this.headers}).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    find(id: string): Observable<Scheda> {
        // @ts-ignore
        return this.http.get<Scheda[]>(CONSTANST.routes.scheda.find + id + '/schede', {headers: this.headers}).pipe(
            retry(1),
            catchError(this.handleError)
        );

    }


    // tslint:disable-next-line:typedef
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            if (error.status === 403 || error.status === 401) {
                localStorage.removeItem('token');

            }
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }

    hasToken(): boolean {
        return !!localStorage.getItem('token');
    }
}
