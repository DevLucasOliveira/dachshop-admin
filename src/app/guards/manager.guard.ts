import { SecurityUtil } from './../utils/security.util';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class ManagerGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {
        return SecurityUtil.isInRole('manager');
    }

}