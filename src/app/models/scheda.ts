import {Esercizio} from './esercizio';
import {User} from './user';

export interface Scheda {
    id: number;
    descrizione: string;
    info: string;
    nome: string;
    dataInserimento: Date;
    esercizi: Esercizio[];
    utente: User;
}
