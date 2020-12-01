import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    email: string;
    isAdmin: boolean;
    isUser: boolean;

    constructor(
        private authService: AuthService,
        private router: Router
        // tslint:disable-next-line:no-unused-expression
    ) {
        this.email = localStorage.getItem('email');
        this.checkRole();
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        if (!this.authService.loggedIn.getValue()) {
            this.router.navigate(['/login']);
        }
    }

    checkRole(): void {
        if (localStorage.getItem('role') === 'ROLE_ADMIN') {
            this.isAdmin = true;
        } else {
            this.isUser = true;
        }

    }

}
