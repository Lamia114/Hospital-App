import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../prescription.service';
import { Prescription } from '../prescription.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-prescriptions',
  templateUrl: './manage-prescriptions.component.html',
  styleUrls: ['./manage-prescriptions.component.css'],
})
export class ManagePrescriptionsComponent implements OnInit {
  prescriptions: Prescription[] = [];
  newPrescription: Prescription = {
    id: '',
    patientName: '',
    medicationName: '',
    dosage: '',
    instructions: '',
    doctorId: '', 
  };

  loggedInDoctorId: string = '12345'; 
  constructor(
    private prescriptionService: PrescriptionService,
    private toastr: ToastrService 
  ) {}

  ngOnInit(): void {
    // Fetch prescriptions for the logged-in doctor
    this.prescriptions = this.prescriptionService.getPrescriptionsForDoctor(this.loggedInDoctorId);
  }

  createPrescription() {
    if (this.isValidPrescription(this.newPrescription)) {
      this.prescriptionService.createPrescription(this.newPrescription);
     
      
      this.toastr.success('Prescription created successfully', 'Success');

      this.newPrescription = {
        id: '',
        patientName: '',
        medicationName: '',
        dosage: '',
        instructions: '',
        doctorId: this.loggedInDoctorId,
      };
    }
  }

  isValidPrescription(prescription: Prescription): boolean {
   
    return true; 
  }
  resetForm() {
    this.newPrescription = {
      id: '',
      patientName: '',
      medicationName: '',
      dosage: '',
      instructions: '',
      doctorId: this.loggedInDoctorId, 
    };
  }
}
