import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { ServiceRequestListComponent } from './components/service-request/service-request-list/service-request-list.component';
import { ServiceRequestFormComponent } from './components/service-request/service-request-form/service-request-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    ServiceRequestListComponent,
    ServiceRequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule // Agrega FormsModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
