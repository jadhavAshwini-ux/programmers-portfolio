import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { PersonalSubInfoComponent } from './personal-details/personal-sub-info/personal-sub-info.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'personal-details',
      component: PersonalDetailsComponent
    },
    {
      path: 'work-details',
      component: WorkDetailsComponent
    },
    {
      path: 'personal-sub-info',
      component: PersonalSubInfoComponent
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
