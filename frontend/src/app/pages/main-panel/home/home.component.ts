import {Component, OnInit, OnDestroy} from '@angular/core';

import {User} from '../../../models/user';
import {AuthenticationService} from '../../../services/authentication.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  currentUser: User;
  subscription: Subscription;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
