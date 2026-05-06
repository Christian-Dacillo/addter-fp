import { Injectable } from '@angular/core';

export interface AmateurData {
  licensee: string;
  callSign: string;
  licenseClass: string;
  equipmentOne: string;
  equipmentTwo: string;
  equipmentThree: string;
  address: string;
  stationLocation: string;
  validUntil: string;
  issuedOn: string;
  officialReceipt: string;
  amount: string;
  datePaid: string;
  cashier: string;
  signatoryLineone: string;
  signatoryLinetwo: string;
  ntcNumberOne: string;
  ntcNumberTwo: string;
  footerLineOne: string;
  footerLineTwo: string;
}

@Injectable({ providedIn: 'root' })
export class AmateurDataService {
  data: AmateurData = {
    licensee: '',
    callSign: '',
    licenseClass: '',
    equipmentOne: '',
    equipmentTwo: '',
    equipmentThree: '',
    address: '',
    stationLocation: '',
    validUntil: '',
    issuedOn: '',
    officialReceipt: '',
    amount: '',
    datePaid: '',
    cashier: '',
    signatoryLineone: '',
    signatoryLinetwo: '',
    ntcNumberOne: '',
    ntcNumberTwo: '',
    footerLineOne: '',
    footerLineTwo: '',
  };
}
