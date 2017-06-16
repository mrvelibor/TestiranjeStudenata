import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class StudentGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    let user = localStorage.getItem('user');
    if (user) {
      let userObj = JSON.parse(user);
      if (userObj.type == 3) {
        return true;
      }
    }
    this.router.navigate(['/']);
    return false;
  }
}
