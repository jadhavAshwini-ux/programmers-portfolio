import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '', redirectTo: '#', pathMatch: 'full'
    },
    {
      path: 'details',
      loadChildren: 'src/app/details/details.module#DetailsModule'
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
