// src/app/patient.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from './models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patients: Patient[] = [
    {
      id: 1,
      name: 'John Doe',
      contactInfo: 'john@example.com',
      appointmentDetails: '10:00 AM - Room 101',
    },
    {
      id: 2,
      name: 'Huda',
      contactInfo: 'Huda@example.com',
      appointmentDetails: '09:00 AM - Room 102',
    },
    {
      id: 3,
      name: 'Sara',
      contactInfo: 'sara@example.com',
      appointmentDetails: '08:00 PM - Room 303',
    },
    {
      id: 4,
      name: 'Khalid',
      contactInfo: 'khalid@example.com',
      appointmentDetails: '06:00 PM - Room 101',
    },
  ];

  getPatients(): Observable<Patient[]> {
    return of(this.patients);
  }
}
