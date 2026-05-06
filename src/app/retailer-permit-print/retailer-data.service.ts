import { Injectable } from '@angular/core';

export interface RetailerData {
  permitNo: string;
  dateIssued: string;
  applicantName: string;
  businessAddress: string;
  telephone: string;
  faxNo: string;
  secDtiRegNo: string;
  validFrom: string;
  validTo: string;
  orNo: string;
  datePaid: string;
  amount: string;
  docStampTax: string;
  encoder: string;
}

@Injectable({ providedIn: 'root' })
export class RetailerDataService {
  data: RetailerData = {
    permitNo: '',
    dateIssued: '',
    applicantName: '',
    businessAddress: '',
    telephone: '',
    faxNo: '',
    secDtiRegNo: '',
    validFrom: '',
    validTo: '',
    orNo: '',
    datePaid: '',
    amount: '',
    docStampTax: '',
    encoder: '',
  };
}
