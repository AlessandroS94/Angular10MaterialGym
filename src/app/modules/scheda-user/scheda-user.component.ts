import {Component, OnInit} from '@angular/core';
import {SchedaService} from '../../services/scheda.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Scheda} from '../../models/scheda';


// @ts-ignore
@Component({
    selector: 'app-scheda-user',
    templateUrl: './scheda-user.component.html',
    styleUrls: ['./scheda-user.component.scss']
})
export class SchedaUserComponent implements OnInit {

    // @ts-ignore
    dataSource: Scheda;

    // tslint:disable-next-line:variable-name
    constructor(public schedaService: SchedaService, private _sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {

        this.schedaService.find(localStorage.getItem('id')).subscribe(res => {
            // @ts-ignore
            this.dataSource = res[0];
        });

    }

    // tslint:disable-next-line:typedef variable-name
    urlYoutube(videoURL: any) {
        return String (this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoURL));
    }
}
