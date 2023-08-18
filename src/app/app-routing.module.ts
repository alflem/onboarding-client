import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin-page', component: AdminPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
