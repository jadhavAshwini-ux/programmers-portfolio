import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';
import { Router } from '@angular/router';
import { CoreConstants } from '../../coreConstants';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  messages = Constants.messages;
  values = Constants.value;
  personalMailId = this.messages.mailId;
  isPersonalData: boolean;
  technologyNames = this.values.technologyNames;
  technologyValues = this.values.usedTechnologies;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isPersonalData = false;
  }

  personalData() {
    this.router.navigateByUrl(CoreConstants.paths.personalInfo);
  }

  navigateToWorkDetails() {
    this.router.navigateByUrl(CoreConstants.paths.workDetails);
  }

}
