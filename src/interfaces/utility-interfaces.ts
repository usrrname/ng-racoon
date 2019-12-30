  
  export interface PatientData {
    name: string;
    id: string;
    gender?: string;
    birthDate?: string;
    location: string;
    address: string;
    lastUpdated: string;
  }

  export interface ContactKeyValues {
    key?: string;
    value?: Number | string;
  }
  
  export interface Providers {
    id: string;
    name: string;
    resourceType: string;
  }
