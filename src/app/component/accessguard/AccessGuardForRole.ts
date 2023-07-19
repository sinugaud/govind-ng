
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardForRole implements CanActivate {
  constructor(public router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('organization') == "2") {
      this.router.navigate(['/user']);
      return false;
    } else {
      return true;
    }
  }
}
