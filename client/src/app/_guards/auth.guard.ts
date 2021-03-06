import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService){}
  canActivate(): Observable<any> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        else return this.toastr.error('You shall not pass!')
      })
    )
  }
  
}
