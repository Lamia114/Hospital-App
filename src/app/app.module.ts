import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ManagePrescriptionsComponent } from './manage-prescriptions/manage-prescriptions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DoctorComponent,
    ManageUsersComponent,
    ManageAppointmentsComponent,
    HomepageComponent,
    PatientListComponent,
    ManagePrescriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
