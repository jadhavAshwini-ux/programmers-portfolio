import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { PersonalSubInfoComponent } from './personal-details/personal-sub-info/personal-sub-info.component';

@NgModule({
  declarations: [PersonalDetailsComponent, WorkDetailsComponent, PersonalSubInfoComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  entryComponents: [PersonalDetailsComponent]
})
export class DetailsModule { }
