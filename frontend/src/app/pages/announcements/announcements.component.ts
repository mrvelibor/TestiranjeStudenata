import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'announcements',
  templateUrl: 'announcements.component.html',
  styleUrls: ['announcements.component.css']
})

export class AnnouncementsComponent {

  @Input('announcements')
  announcements: any[];

  currentAnnouncementIndex: number = 0;

  displayAsList: boolean = true;

  @Input('selectedCompany')
  selectedCompany;

  constructor(private alertService: AlertService) {
  }

  openActionLink(actionLink) {
    if(!this.selectedCompany.id) {
      this.alertService.fail("Company not selected.");
      return;
    }
    this.alertService.success("Link clicked: " + actionLink);
    window.location.href = actionLink;
  }

  previousAnnouncement() {
    if(this.currentAnnouncementIndex > 0) {
      --this.currentAnnouncementIndex;
    }
  }

  nextAnnouncement() {
    if(this.currentAnnouncementIndex < this.announcements.length - 1) {
      ++this.currentAnnouncementIndex;
    }
  }

  dismissAnnouncement(announcement) {
    let index = this.announcements.indexOf(announcement);
    if(index == -1) {
      return;
    }
    if(this.currentAnnouncementIndex == this.announcements.length - 1) {
      --this.currentAnnouncementIndex;
    }
    this.announcements.splice(index, 1);
  }

}
