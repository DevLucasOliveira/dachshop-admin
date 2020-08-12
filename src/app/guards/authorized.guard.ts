import { SecurityUtil } from './../utils/security.util';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthorizedGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {
        const user = SecurityUtil.get();
        if (!user || !user.token) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }

}