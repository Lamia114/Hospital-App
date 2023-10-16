import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';

import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PatientListComponent } from './patient-list/patient-list.component'; // Adjust the path as needed
import { ManagePrescriptionsComponent } from './manage-prescriptions/manage-prescriptions.component';





const routes: Routes = [
  { path:'homepage',component:HomepageComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'admin/users', component: ManageUsersComponent }, 
  { path: 'admin/appointments', component: ManageAppointmentsComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, 
  {
    path: 'patients', component: PatientListComponent, 
  },
  {path:'manage-prescriptions',component:ManagePrescriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
