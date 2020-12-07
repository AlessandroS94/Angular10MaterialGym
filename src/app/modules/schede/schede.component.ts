import {Component, OnInit} from '@angular/core';
import {SchedaService} from '../../services/scheda.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';


// @ts-ignore
@Component({
    selector: 'app-schede',
    templateUrl: './schede.component.html',
    styleUrls: ['./schede.component.scss']
})
export class SchedeComponent implements OnInit {

    displayedColumns: string[] = ['nome', 'descrizione', 'info', 'data', 'action'];
    dataSource;
    dataUser: any;

    constructor(public schedaService: SchedaService, public snack: MatSnackBar) {
    }

    ngOnInit(): void {
        this.schedaService.findAll().subscribe(res => {
            // @ts-ignore
            this.dataSource = res;
        });
    }

    // tslint:disable-next-line:typedef
    delete(id) {
        this.schedaService.delete(id).subscribe(del => {
            // @ts-ignore
            this.schedaService.findAll().subscribe(res => {
                // @ts-ignore
                this.dataSource = res;
            });
        });
    }

    // tslint:disable-next-line:typedef
    getUser(id) {
        this.schedaService.getUser(id).subscribe(res => {
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
