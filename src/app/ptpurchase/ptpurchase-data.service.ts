import { Injectable } from '@angular/core';

export interface PTPurchaseData {
  id: number;                        // int NOT NULL
  permitNo: string;                  // nvarchar
  applicant: string;                 // nvarchar
  address: string;                   // nvarchar
  dateProcessed: string;             // datetime
  model: string;                     // nvarchar
  noOfUnits: string;                 // nvarchar
  frequencyRange: string;            // nvarchar
  rfPowerOutput: string;             // nvarchar
  officialReceipt: number | null;    // decimal(18,0)
  amount: number | null;             // money
  date: string;                      // datetime
  encoded: string;                   // nvarchar
  released: string;                  // datetime
  approvingOfficer: string;          // nvarchar
  frequencyAssignment: string;       // nvarchar
  forNew: string;                    // nvarchar
  additional: string;                // nvarchar
  others: string;                    // nvarchar
  validity: string;                  // datetime
  extension: string;                 // datetime
  position: string;                  // nvarchar
  newRadio: string;                  // nvarchar
  additionalRadio: string;           // nvarchar
  unitCount: number | null;          // int
}

@Injectable({ providedIn: 'root' })
export class PTPurchaseDataService {
  data: PTPurchaseData = {
    id: 0,
    permitNo: '',
    applicant: '',
    address: '',
    dateProcessed: '',
    model: '',
    noOfUnits: '',
    frequencyRange: '',
    rfPowerOutput: '',
    officialReceipt: null,
    amount: null,
    date: '',
    encoded: '',
    released: '',
    approvingOfficer: '',
    frequencyAssignment: '',
    forNew: '',
    additional: '',
    others: '',
    validity: '',
    extension: '',
    position: '',
    newRadio: '',
    additionalRadio: '',
    unitCount: null,
  };
}
