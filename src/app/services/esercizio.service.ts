import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Esercizio} from '../models/esercizio';
import {Response} from '../models/response';
import {CONSTANST} from '../utils/constanst';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EsercizioService {

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

    addEsercizio(esercizio: Esercizio): Observable<Response> {
        // @ts-ignore
        return this.http.post<Response>(
            CONSTANST.routes.esercizio.save, {
                descrizione: esercizio.descrizione,
                nome: esercizio.nome,
                url: esercizio.url,
                kg: esercizio.kg,
                ripetizioni: esercizio.ripetizioni
            }, {headers: this.headers}).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    findAll(): Observable<Esercizio[]> {
        // @ts-ignore
        return this.http.get<Esercizio[]>(CONSTANST.routes.esercizio.list, {headers: this.headers}).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    deleteEsercizio(esercizio: Esercizio | number): Observable<any> {
        const idx = typeof esercizio === 'number' ? esercizio : esercizio.id;
        return this.http.delete<Esercizio>(CONSTANST.routes.esercizio.delete + idx, {headers: this.headers}).pipe(
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
