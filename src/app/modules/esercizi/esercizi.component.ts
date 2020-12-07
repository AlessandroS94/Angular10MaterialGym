import {Component, OnInit} from '@angular/core';
import {EsercizioService} from '../../services/esercizio.service';

@Component({
    selector: 'app-esercizi',
    templateUrl: './esercizi.component.html',
    styleUrls: ['./esercizi.component.scss']
})
export class EserciziComponent implements OnInit {

    displayedColumns: string[] = ['nome', 'descrizione', 'url', 'ripetizioni', 'kg', 'action'];
    dataSource;

    constructor(private esercizioService: EsercizioService) {
    }

    ngOnInit(): void {
      this.esercizioService.findAll().subscribe(res => {
        // @ts-ignore
          this.dataSource = res;
      });
    }

    // tslint:disable-next-line:typedef
    delete( id){
        console.log(id);
        this.esercizioService.deleteEsercizio(id).subscribe(del => {
            // @ts-ignore
            this.esercizioService.findAll().subscribe(res => {
                // @ts-ignore
                this.dataSource = res;
            });
        });
    }

}
