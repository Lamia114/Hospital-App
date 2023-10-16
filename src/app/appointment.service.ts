import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: any[] = []; // Simulated appointment data

  constructor() {}

  getAppointments() {
    return this.appointments;
  }

  addAppointment(appointment: any) {
    // Simulate adding an appointment to the array
    this.appointments.push(appointment);
  }

  editAppointment(updatedAppointment: any) {
    // Find the index of the appointment to update
    const index = this.appointments.findIndex((appointment) => appointment.id === updatedAppointment.id);

    if (index !== -1) {
      // Simulate updating the appointment
      this.appointments[index] = updatedAppointment;
    }
  }

  deleteAppointment(appointmentId: number) {
    // Find the index of the appointment to delete
    const index = this.appointments.findIndex((appointment) => appointment.id === appointmentId);

    if (index !== -1) {
      // Simulate deleting the appointment
      this.appointments.splice(index, 1);
    }
  }
}
