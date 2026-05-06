import { Injectable } from '@angular/core';

export interface FRTGData {
  registrationNo: string;
  name: string;
  address: string;
  address2: string;
  birthdate: string;
  citizenship: string;
  sex: string;
  height: string;
  weight: string;
  dateIssued: string;
  validUntil: string;
  typeClass: string;
  dateTaken: string;
  place: string;
  rating: string;
  orNo: string;
  amount: string;
  datePaid: string;
  recommendingName: string;
  recommendingPosition: string;
  signatory: string;
  serialNo: string;
}

@Injectable({ providedIn: 'root' })
export class FRTGDataService {
  data: FRTGData = {
    registrationNo: '',
    name: '',
    address: '',
    address2: '',
    birthdate: '',
    citizenship: '',
    sex: '',
    height: '',
    weight: '',
    dateIssued: '',
    validUntil: '',
    typeClass: '',
    dateTaken: '',
    place: '',
    rating: '',
    orNo: '',
    amount: '',
    datePaid: '',
    recommendingName: '',
    recommendingPosition: '',
    signatory: '',
    serialNo: '',
  };
}
