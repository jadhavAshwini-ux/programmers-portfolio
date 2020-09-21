import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';
import { Router } from '@angular/router';
import { CoreConstants } from '../../coreConstants';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
  messages = Constants.messages;
  values = Constants.value;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl(CoreConstants.paths.personalDetails);
  }

}
