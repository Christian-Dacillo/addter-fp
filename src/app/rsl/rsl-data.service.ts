import { Injectable } from '@angular/core';

export interface RslData {
  licenseNo: string;
  dateIssued: string;
  holderName: string;
  stationType: string;
  location: string;
  longitude: string;
  latitude: string;
  classOfStation: string;
  natureOfService: string;
  callSign: string;
  hoursOfOperation: string;
  pointsOfCommunication: string;
  frequencies: string;
  bandwidth: string;
  power: string;
  antennaParticulars: string;
  remarks: string;
  equipmentMakeType: string;
  equipmentRange: string;
  serialNumber: string;
  effectiveFrom: string;
  effectiveTo: string;
  orNo: string;
  amount: string;
  datePaid: string;
}

@Injectable({ providedIn: 'root' })
export class RslDataService {
  data: RslData = {
    licenseNo: '',
    dateIssued: '',
    holderName: '',
    stationType: '',
    location: '',
    longitude: '',
    latitude: '',
    classOfStation: '',
    natureOfService: '',
    callSign: '',
    hoursOfOperation: '',
    pointsOfCommunication: '',
    frequencies: '',
    bandwidth: '',
    power: '',
    antennaParticulars: '',
    remarks: '',
    equipmentMakeType: '',
    equipmentRange: '',
    serialNumber: '',
    effectiveFrom: '',
    effectiveTo: '',
    orNo: '',
    amount: '',
    datePaid: '',
  };
}
