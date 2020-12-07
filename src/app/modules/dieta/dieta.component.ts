import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {DietaService} from '../../services/dieta.service';
import {Dieta} from '../../models/dieta';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.scss']
})
export class DietaComponent implements OnInit {

  // @ts-ignore
  dataSource: Dieta;

  // tslint:disable-next-line:variable-name
  constructor(public dietaService: DietaService) {
  }

  ngOnInit(): void {

    this.dietaService.find(localStorage.getItem('id')).subscribe(res => {
      // @ts-ignore
      this.dataSource = res[0];
    });

  }

}
