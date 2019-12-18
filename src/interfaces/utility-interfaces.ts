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
    id: string;
    location: string;
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
  
  export interface TaskBillingData {
    taskIndex: string;
    name: string;
    owner: string;
    ownerId: string;
    billingItems: BillingItems[];
  }
  
  export interface BillingItems {
    taskIndex: number;
    item: string;
    quantity: number;
    supplyChargeItemId: string;
    laborChargeItemId: string;
    laborCategory: string;
    laborHours: number;
  }
  