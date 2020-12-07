import {User} from './user';
import {Alimento} from './alimento';

export interface Dieta{
    id: number;
    info: string;
    nome: string;
    kcal: string;
    active: boolean;
    utente: User[];
    alimenti: Alimento[];
    data_scadenza: Date;
}
