import { Injectable } from '@angular/core';

export interface RadioRow {
  classOfStation: string;
  power: string;
  equipment: string;
  serialNo: string;
}

export interface PTPossessData {
  permitNo: string;
  issuedDate: string;
  companyName: string;
  address: string;
  noOfUnits: string;
  radioRows: RadioRow[];
  frequencyRange: string;
  sourceOfEquipment: string;
  addressOfSource: string;
  permitToPurchaseNo: string;
  placeOfStorage: string;
  intendedUse: string;
  officialReceipt: string;
  datePaid: string;
  amount: string;
  docStamp: string;
  encoder: string;
}

@Injectable({ providedIn: 'root' })
export class PTPossessDataService {
  data: PTPossessData = {
    permitNo: '',
    issuedDate: '',
    companyName: '',
    address: '',
    noOfUnits: '',
    radioRows: [
      { classOfStation: '', power: '', equipment: '', serialNo: '' },
      { classOfStation: '', power: '', equipment: '', serialNo: '' },
    ],
    frequencyRange: '',
    sourceOfEquipment: '',
    addressOfSource: '',
    permitToPurchaseNo: '',
    placeOfStorage: '',
    intendedUse: '',
    officialReceipt: '',
    datePaid: '',
    amount: '',
    docStamp: '',
    encoder: '',
  };
}
