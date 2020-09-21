import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreConstants } from '../../../coreConstants';
import { Constants } from '../../constants';

@Component({
  selector: 'app-personal-sub-info',
  templateUrl: './personal-sub-info.component.html',
  styleUrls: ['./personal-sub-info.component.css']
})
export class PersonalSubInfoComponent implements OnInit {
  messages = Constants.messages;
  cityLink = this.messages.cityLink;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl(CoreConstants.paths.personalDetails);
  }

  next() {
    this.router.navigateByUrl(CoreConstants.paths.workDetails);
  }

}
