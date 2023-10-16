import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css'],
})
export class ManageAppointmentsComponent implements OnInit {
  appointments: any[] = [];
  newAppointment: any = {
    name: '',
    date: '',
    mbile:'',
    clinic: 'General Medical Clinic', // Initialize the clinic property to 'General Medical Clinic'
  };
  selectedAppointment: any = {
    name: '',
    date: '',
    mbile:'',
    clinic: 'General Medical Clinic', // Initialize the clinic property to 'General Medical Clinic'
  };

  // Define clinic options
  clinicOptions: string[] = ['General Medical Clinic', 'Dental Clinic', 'Orthopedic Clinic'];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments();
  }
  submitAppointment() {
    if (this.newAppointment.name && this.newAppointment.date && this.newAppointment.clinic) {
      this.appointmentService.addAppointment(this.newAppointment);

      // Reset the form after adding an appointment
      this.newAppointment = {
        name: '',
        date: '',
        mbile:'',
        clinic: 'General Medical Clinic', // Reset the clinic property to 'General Medical Clinic'
      };
    } else {
      console.log('Please provide the required information for the appointment.');
    }
  }

  addAppointment() {
    if (this.newAppointment.name && this.newAppointment.date && this.newAppointment.clinic) {
      this.appointmentService.addAppointment(this.newAppointment);

      this.newAppointment = {
        name: '',
        date: '',
        mbile:'',
        clinic: 'General Medical Clinic', // Reset the clinic property to 'General Medical Clinic'
      };
    } else {
      console.log('Please provide the required information for the appointment.');
    }
  }

  editAppointment() {
    if (this.selectedAppointment && this.selectedAppointment.id) {
      this.appointmentService.editAppointment(this.selectedAppointment);

      this.selectedAppointment = {
        name: '',
        date: '',
        mbile:'',
        clinic: 'General Medical Clinic', // Reset the clinic property to 'General Medical Clinic'
      };
    } else {
      console.log('Please select an appointment to edit.');
    }
  }

  deleteAppointment() {
    if (this.selectedAppointment && this.selectedAppointment.id) {
      this.appointmentService.deleteAppointment(this.selectedAppointment.id);

      this.selectedAppointment = {
        name: '',
        date: '',
        mbile:'',
        clinic: 'General Medical Clinic', // Reset the clinic property to 'General Medical Clinic'
      };
    } else {
      console.log('Please select an appointment to delete.');
    }
  }

  selectAppointment(appointment: any) {
    this.selectedAppointment = { ...appointment };
  }
}
