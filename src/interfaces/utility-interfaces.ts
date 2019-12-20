export interface BillingData {
    taskIndex: number;
    taskDescription: string;
    supplyItemCategory: string;
    supplyItemQuantity: number;
    laborCategory: string;
    laborHours: number;
    supplyChargeItemId: string;
    laborChargeItemId: string;
  }
  
  export interface TaskData {
    taskIndex: number;
    name: string;
    ownerName: string;
    ownerId: string;
    description: string;
    completed: boolean;
  }
  
  export interface PatientData {
    name: string;
    id: string;
    gender?: string;
    birthDate?: string;
    location: string;
    address: string;
    lastUpdated: string;
  }

  export interface NoteData {
    date: string;
    author: string;
    note: string;
    createdTimestamp: Date;
  }
  export interface Providers {
    id: string;
    name: string;
    resourceType: string;
  }
