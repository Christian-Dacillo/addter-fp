import { Injectable } from '@angular/core';

export interface PTPurchaseData {
  permitNo: string;
  issuedDate: string;
  certifiedName: string;
  postalAddress: string;
  model: string;
  noOfUnits: string;
  frequencyRange: string;
  frequencyAssignment: string;
  rfPowerOutput: string;
  validUntil: string;
  officialReceipt: string;
  amount: string;
  datePaid: string;
  encodedBy: string;
  intendedUse: string;
}

@Injectable({ providedIn: 'root' })
export class PTPurchaseDataService {
  data: PTPurchaseData = {
    permitNo: '',
    issuedDate: '',
    certifiedName: '',
    postalAddress: '',
    model: '',
    noOfUnits: '',
    frequencyRange: '',
    frequencyAssignment: '',
    rfPowerOutput: '',
    validUntil: '',
    officialReceipt: '',
    amount: '',
    datePaid: '',
    encodedBy: '',
    intendedUse: '',
  };
}
