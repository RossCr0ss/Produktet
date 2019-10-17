import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicMenuComponent } from 'src/components/menu/m-box-menu/m-box-menu.component';


const routes: Routes = [
  {
    path: '',
    component: BasicMenuComponent,
  }
  /* {
    path: 'kontakt',
    component: ''
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
