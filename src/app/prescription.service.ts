import { Injectable } from '@angular/core';
import { Prescription } from './prescription.model';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  private prescriptions: Prescription[] = [];

  constructor() {}

  getPrescriptionsForDoctor(doctorId: string): Prescription[] {
    return this.prescriptions.filter((prescription) => prescription.doctorId === doctorId);
  }

  // Implement the createPrescription method
  createPrescription(prescription: Prescription) {
    // You can add validation logic here if needed
    this.prescriptions.push(prescription);
  }

  // ... rest of the methods
}
