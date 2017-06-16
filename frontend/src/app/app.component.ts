import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from "./models/user";
import {AuthenticationService} from "./services/authentication.service";
import {Router} from "@angular/router";
import {AlertService} from "./services/alert.service";
import {Subscription} from "rxjs/Subscription";
import {OverlayService} from "./services/overlay.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  currentUser: User;

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(user => this.currentUser = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
