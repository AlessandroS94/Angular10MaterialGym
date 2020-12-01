import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Alimento} from '../models/alimento';
import {Observable} from 'rxjs';
import {Response} from '../models/response';
import {CONSTANST} from '../utils/constanst';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    constructor(
        public http: HttpClient
    ) {
    }

    headers = new HttpHeaders({
        'x-access-token': localStorage.getItem('token')
    });

    insertFood(food: Alimento): Observable<Response> {
        return this.http.post<Response>(
            CONSTANST.routes.alimenti.insert, {
                descrizione: food.descrizione,
                nome: food.nome,
                grassi: food.grassi,
                proteine: food.proteine,
                carboidrati: food.carboidrati
            });
    }
}
