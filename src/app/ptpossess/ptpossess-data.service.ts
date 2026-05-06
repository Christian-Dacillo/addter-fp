import { Injectable } from '@angular/core';

export interface PTPossessData {
  id: number;
  permitNo: string;           // nvarchar
  applicant: string;          // nvarchar
  address: string;            // nvarchar
  makeModel1: string;         // nvarchar
  makeModel2: string;
  makeModel3: string;
  makeModel4: string;
  makeModel5: string;
  makeModel6: string;
  makeModel7: string;
  makeModel8: string;
  makeModel9: string;
  makeModel10: string;
  noOfUnits: string;          // nvarchar
  fx: number | null;          // int
  fb: number | null;          // int
  fxAndFb: number | null;     // int
  ml: number | null;          // int
  p: number | null;           // int
  repeater: number | null;    // int
  serial1: string;  serial2: string;  serial3: string;  serial4: string;  serial5: string;
  serial6: string;  serial7: string;  serial8: string;  serial9: string;  serial10: string;
  serial11: string; serial12: string; serial13: string; serial14: string; serial15: string;
  serial16: string; serial17: string; serial18: string; serial19: string; serial20: string;
  serial21: string; serial22: string; serial23: string; serial24: string; serial25: string;
  frequencyRange: string;           // nvarchar
  rfPowerOutput: string;            // nvarchar
  sourceOfEquipment: string;        // nvarchar
  addressOfSource: string;          // nvarchar
  permitToPurchaseNo: string;       // nvarchar
  placeOfStorage: string;           // nvarchar
  intended: string;                 // nvarchar
  dateProcessed: string;            // datetime (stored as string for input binding)
  possessFee: number | null;        // money
  officialReceipt: number | null;   // decimal(18,0)
  date: string;                     // datetime
  encoded: string;                  // nvarchar
  approvingOfficer: string;         // nvarchar
  fillingFee: number | null;        // money
  docStamp: number | null;          // money
  totalAmount: number | null;       // money
  totalPossessFee: number | null;   // money
  cityMunicipality: string;         // nvarchar
  province: string;                 // nvarchar
  callSign: string;                 // nvarchar
  unitCount: number | null;         // int
}

@Injectable({ providedIn: 'root' })
export class PTPossessDataService {
  data: PTPossessData = {
    id: 0,
    permitNo: '', applicant: '', address: '',
    makeModel1: '', makeModel2: '', makeModel3: '', makeModel4: '', makeModel5: '',
    makeModel6: '', makeModel7: '', makeModel8: '', makeModel9: '', makeModel10: '',
    noOfUnits: '',
    fx: null, fb: null, fxAndFb: null, ml: null, p: null, repeater: null,
    serial1: '',  serial2: '',  serial3: '',  serial4: '',  serial5: '',
    serial6: '',  serial7: '',  serial8: '',  serial9: '',  serial10: '',
    serial11: '', serial12: '', serial13: '', serial14: '', serial15: '',
    serial16: '', serial17: '', serial18: '', serial19: '', serial20: '',
    serial21: '', serial22: '', serial23: '', serial24: '', serial25: '',
    frequencyRange: '', rfPowerOutput: '', sourceOfEquipment: '', addressOfSource: '',
    permitToPurchaseNo: '', placeOfStorage: '', intended: '',
    dateProcessed: '', possessFee: null, officialReceipt: null, date: '',
    encoded: '', approvingOfficer: '', fillingFee: null, docStamp: null,
    totalAmount: null, totalPossessFee: null,
    cityMunicipality: '', province: '', callSign: '', unitCount: null,
  };
}
