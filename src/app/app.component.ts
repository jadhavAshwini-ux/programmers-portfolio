import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreConstants } from './coreConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioApp';
  isPersonal: boolean;

  constructor(private router: Router) {}

  next() {
    this.isPersonal = true;
    this.router.navigateByUrl(CoreConstants.paths.personalDetails);
  }
}
