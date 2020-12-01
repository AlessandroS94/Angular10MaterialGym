import { PageEvent } from '@angular/material/paginator';
import {Alimento} from '../models/alimento';

export abstract class Controller {

  constructor() { }

  public displayedColumns: string[];

  public pageSizeOptions: number[];

  public pageSize: number;

  public dataSource: any;

  public pageEvent: PageEvent;

  public resultsLength: number;

  public page: number;

  public isLoading: boolean;

  public isTotalReached: boolean;

  public totalItems: number;

  public search: string;

  abstract getData(): void;

  abstract edit(food: Alimento): void;

  abstract save(): void;

  abstract delete(food: Alimento): void;

}
