import { Component, OnInit } from '@angular/core';
import {EsercizioService} from '../../services/esercizio.service';
import {AlimentiService} from '../../services/alimenti.service';

@Component({
  selector: 'app-alimenti',
  templateUrl: './alimenti.component.html',
  styleUrls: ['./alimenti.component.scss']
})
export class AlimentiComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'descrizione', 'grassi', 'carboidrati', 'proteine', 'action'];
  dataSource;

  constructor(private alimentiService: AlimentiService) {
  }

  ngOnInit(): void {
    this.alimentiService.findAll().subscribe(res => {
      // @ts-ignore
      this.dataSource = res;
    });
  }

  // tslint:disable-next-line:typedef
  delete( id){
    this.alimentiService.deleteAlimento(id).subscribe(del => {
      // @ts-ignore
      this.alimentiService.findAll().subscribe(res => {
        // @ts-ignore
        this.dataSource = res;
      });
    });
  }

}
