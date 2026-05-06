import { Injectable } from '@angular/core';

export interface AmateurData {
  id: number;                      // int IDENTITY(1,1) NOT NULL
  type: string;                    // nvarchar
  licensee: string;                // nvarchar
  registration: string;            // nvarchar
  callSign: string;                // nvarchar
  address: string;                 // nvarchar
  firstName: string;               // nvarchar
  middleName: string;              // nvarchar
  lastName: string;                // nvarchar
  birthdate: string;               // datetime
  height: string;                  // nvarchar
  weight: string;                  // nvarchar
  gender: string;                  // nvarchar
  citizenship: string;             // nvarchar
  employer: string;                // nvarchar
  validFrom: string;               // datetime
  validUntil: string;              // datetime
  dateIssued: string;              // datetime
  officialReceipt: number | null;  // int
  amount: number | null;           // numeric(18,2)
  datePaid: string;                // datetime
  issuedBy: string;                // nvarchar
  officialReceipt2: number | null; // int
  amount2: number | null;          // int
  datePaid2: string;               // datetime
  issuedBy2: number | null;        // int
  officialReceipt3: number | null; // int
  amount3: number | null;          // int
  datePaid3: string;               // datetime
  issuedBy3: number | null;        // int
  addrBrgy: string;                // nvarchar
  addrTown: string;                // nvarchar
  addrProv: string;                // nvarchar
  stationBrgy: string;             // nvarchar
  stationTown: string;             // nvarchar
  stationProv: string;             // nvarchar
  regionalDirector: string;        // nvarchar
  status: string;                  // nvarchar
  dateReceived: string;            // datetime
  releaseDate: string;             // datetime
  examDate: string;                // datetime
  examTaken: string;               // nvarchar
  examRemark: string;              // nvarchar
  elem2: number | null;            // numeric(18,2)
  elem3: number | null;            // numeric(18,2)
  elem4: number | null;            // numeric(18,2)
  elem5: number | null;            // numeric(18,2)
  elem6: number | null;            // numeric(18,2)
  elem7: number | null;            // numeric(18,2)
  ave: string;                     // nvarchar
  serial: number | null;           // numeric(18,2)
  encodedBy: string;               // nvarchar
  class: string;                   // nvarchar
  callSignLetter: string;          // nvarchar
  amateurClub: string;             // nvarchar
  modification: string;            // nvarchar
  stationLocationDetails: string;  // nvarchar
  equip1: string;  serial1: string;
  equip2: string;  serial2: string;
  equip3: string;  serial3: string;
  equip4: string;  serial4: string;
  equip5: string;  serial5: string;
  equip6: string;  serial6: string;
  equip7: string;  serial7: string;
  equip8: string;  serial8: string;
  equip9: string;  serial9: string;
  equip10: string; serial10: string;
  equip11: string; serial11: string;
  equip12: string; serial12: string;
  equip13: string; serial13: string;
  equip14: string; serial14: string;
  equip15: string; serial15: string;
  equip16: string; serial16: string;
  equip17: string; serial17: string;
  equip18: string; serial18: string;
  equip19: string; serial19: string;
  equip20: string; serial20: string;
  equip21: string; serial21: string;
  equip22: string; serial22: string;
  equip23: string; serial23: string;
  equip24: string; serial24: string;
  equip25: string; serial25: string;
  equip26: string; serial26: string;
  equip27: string; serial27: string;
  equip28: string; serial28: string;
  equip29: string; serial29: string;
  equip30: string; serial30: string;
  equip31: string; serial31: string;
  equip32: string; serial32: string;
  equip33: string; serial33: string;
  equip34: string; serial34: string;
  equip35: string; serial35: string;
  equip36: string; serial36: string;
  equip37: string; serial37: string;
  equip38: string; serial38: string;
  equip39: string; serial39: string;
  equip40: string; serial40: string;
  lastModified: string;            // nvarchar(10)
  isOpen: number | null;           // tinyint
  isPrinted: number | null;        // tinyint
  routingRefNo: string;            // nvarchar
  // RowVer (timestamp) is server-generated, not included in frontend
}

@Injectable({ providedIn: 'root' })
export class AmateurDataService {
  data: AmateurData = {
    id: 0,
    type: '', licensee: '', registration: '', callSign: '', address: '',
    firstName: '', middleName: '', lastName: '',
    birthdate: '', height: '', weight: '', gender: '', citizenship: '', employer: '',
    validFrom: '', validUntil: '', dateIssued: '',
    officialReceipt: null, amount: null, datePaid: '', issuedBy: '',
    officialReceipt2: null, amount2: null, datePaid2: '', issuedBy2: null,
    officialReceipt3: null, amount3: null, datePaid3: '', issuedBy3: null,
    addrBrgy: '', addrTown: '', addrProv: '',
    stationBrgy: '', stationTown: '', stationProv: '',
    regionalDirector: '', status: '',
    dateReceived: '', releaseDate: '', examDate: '',
    examTaken: '', examRemark: '',
    elem2: null, elem3: null, elem4: null, elem5: null, elem6: null, elem7: null,
    ave: '', serial: null, encodedBy: '', class: '',
    callSignLetter: '', amateurClub: '', modification: '', stationLocationDetails: '',
    equip1: '', serial1: '', equip2: '', serial2: '', equip3: '', serial3: '',
    equip4: '', serial4: '', equip5: '', serial5: '', equip6: '', serial6: '',
    equip7: '', serial7: '', equip8: '', serial8: '', equip9: '', serial9: '',
    equip10: '', serial10: '', equip11: '', serial11: '', equip12: '', serial12: '',
    equip13: '', serial13: '', equip14: '', serial14: '', equip15: '', serial15: '',
    equip16: '', serial16: '', equip17: '', serial17: '', equip18: '', serial18: '',
    equip19: '', serial19: '', equip20: '', serial20: '', equip21: '', serial21: '',
    equip22: '', serial22: '', equip23: '', serial23: '', equip24: '', serial24: '',
    equip25: '', serial25: '', equip26: '', serial26: '', equip27: '', serial27: '',
    equip28: '', serial28: '', equip29: '', serial29: '', equip30: '', serial30: '',
    equip31: '', serial31: '', equip32: '', serial32: '', equip33: '', serial33: '',
    equip34: '', serial34: '', equip35: '', serial35: '', equip36: '', serial36: '',
    equip37: '', serial37: '', equip38: '', serial38: '', equip39: '', serial39: '',
    equip40: '', serial40: '',
    lastModified: '', isOpen: null, isPrinted: null, routingRefNo: '',
  };
}
