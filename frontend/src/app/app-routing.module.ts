import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceRequestListComponent } from './components/service-request/service-request-list/service-request-list.component';
import { ServiceRequestFormComponent } from './components/service-request/service-request-form/service-request-form.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/service-requests', pathMatch: 'full' },
  { path: 'service-requests', component: ServiceRequestListComponent },
  { path: 'service-requests/new', component: ServiceRequestFormComponent },
  { path: 'service-requests/edit/:id', component: ServiceRequestFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
