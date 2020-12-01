import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-alimenti',
    templateUrl: './alimenti.component.html',
    styleUrls: ['./alimenti.component.scss']
})
export class AlimentiComponent implements OnInit {

    authService:AuthService;
    router: Router;

    ngOnInit(): void {
        if (!this.authService.loggedIn.getValue()) {
            this.router.navigate(['/login']);
        }
    }



}
