import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(public router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== '') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
