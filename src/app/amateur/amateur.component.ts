import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amateur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './amateur.component.html',
  styleUrls: ['./amateur.component.css']
})
export class AmateurComponent {
  formData = {
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
    footerLineTwo: ''
  };

  print() {
    window.print();
  }
}
