
  export interface PatientData {
    name: string;
    id: string;
    gender?: string;
    birthDate?: string;
    location: string;
    address: string;
    lastUpdated: string;
  }

  export interface KeyValue {
    key?: string;
    value?: number | string;
  }

  export interface Providers {
    id: string;
    name: string;
    resourceType: string;
  }
