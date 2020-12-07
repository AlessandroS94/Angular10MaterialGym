
import { Response } from '../models/response';
import { Observable } from 'rxjs';

export abstract class Provider {

  constructor() { }

  abstract delete(id: number): Observable<Response>;

}
