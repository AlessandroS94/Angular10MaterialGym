import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {DietaService} from '../../services/dieta.service';

@Component({
    selector: 'app-diete',
    templateUrl: './diete.component.html',
    styleUrls: ['./diete.component.scss']
})
export class DieteComponent implements OnInit {
    displayedColumns: string[] = ['nome', 'info', 'kcal', 'dataScadenza', 'action'];
    dataSource;
    dataUser: any;

    constructor(public dietaService: DietaService, public snack: MatSnackBar) {
    }

    ngOnInit(): void {
        this.dietaService.findAll().subscribe(res => {
            // @ts-ignore
            this.dataSource = res;
        });
    }

    // tslint:disable-next-line:typedef
    delete(id) {
        this.dietaService.delete(id).subscribe(del => {
            // @ts-ignore
            this.dietaService.findAll().subscribe(res => {
                // @ts-ignore
                this.dataSource = res;
            });
        });
    }

    // tslint:disable-next-line:typedef
    getUser(id) {
        this.dietaService.getUser(id).subscribe(res => {
            // @ts-ignore
            this.dataUser = res;
        });
        if (this.dataUser) {
            this.snack.openFromComponent(SnackbarComponent, {
                data: this.dataUser.body.nome + ' ' + this.dataUser.body.cognome + ' ' + this.dataUser.body.email,
                duration: 3000
            });
        }
    }

}
