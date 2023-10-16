// prescription.model.ts

export interface Prescription {
    id: string; // Unique identifier for the prescription
    patientName: string; // Name of the patient receiving the prescription
    medicationName: string; // Name of the prescribed medication
    dosage: string; // Dosage instructions (e.g., 1 tablet daily)
    instructions: string; 
    doctorId: string;
  }
  