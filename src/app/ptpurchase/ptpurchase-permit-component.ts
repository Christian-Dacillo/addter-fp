import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { PTPurchaseDataService, PTPurchaseData } from './ptpurchase-data.service';

@Component({
  selector: 'app-ptpurchase-permit',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ptpurchase-permit-component.html',
  styleUrls: ['./ptpurchase-permit-component.css']
})
export class PTPurchasePermitComponent {
  data: PTPurchaseData;

  constructor(private dataService: PTPurchaseDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  printData() {
    const d = this.data;
    const e = (s: string) => (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    const intendedLine = (val: string) =>
      d.intendedUse === val
        ? `<p style="text-indent:20px">(✓) ${e(val)}</p>`
        : `<p style="text-indent:20px;color:transparent">( ) ${e(val)}</p>`;

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
@page{size:A4;margin:0}
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:'Times New Roman',serif;
  font-size:10pt;
  width:210mm;
  height:297mm;
  padding:6mm 12mm;
  background:white;
  display:flex;
  flex-direction:column;
}
.h{color:transparent!important}
.h *{color:transparent!important}
img.h{opacity:0}
table{width:100%;border-collapse:collapse;border:none;margin:1mm 0}
td{border:none;padding:1px 4px}
.lbl{width:155px;font-size:13pt;padding-right:6px;white-space:nowrap}
.val{font-size:13pt}
.val-c{font-size:13pt;text-align:center}
.issued{text-align:right;font-size:9pt;margin:1mm 0 0}
.title{text-align:center;margin:2mm 0 2mm;font-size:13pt;font-weight:bold;line-height:1.2;margin-bottom:40px}
.para{font-size:13pt;line-height:1.3;margin:1.5mm 0}
.gap{display:flex;gap:5mm;margin:1.5mm 0;font-size:20pt;line-height:1.3}
.section{display:flex;justify-content:space-between;align-items:flex-start;margin-top:5mm;gap:2mm}
.or-left p{margin:0.5mm 0;font-size:10pt;line-height:1.4}
.sig{text-align:center;margin-top:10mm;font-size:10pt;flex-shrink:0}
.notes{margin-top:3mm;flex-shrink:0}
.notes p,.notes li{font-size:7pt;line-height:1.25}
.notes ol{margin:1mm 0 1mm 12px;padding-left:4px}
.footer{margin-top:auto;text-align:center;padding-top:4px}
.footer p{font-size:8.5pt;margin:1px 0}
.footer p.ft{font-size:10pt;font-weight:bold;padding-top:5px}
</style></head><body>

<div class="h" style="display:flex;align-items:flex-start;gap:4mm;line-height:1;margin-bottom:1mm">
  <div style="width:16mm;height:16mm;flex-shrink:0">X</div>
  <div style="flex:1">
    <div style="font-size:10pt;font-weight:bold;line-height:1;margin-bottom:0.3mm">REPUBLIC OF THE PHILIPPINES</div>
    <div style="font-size:10pt;font-weight:bold;line-height:1;margin-bottom:0.3mm">NATIONAL TELECOMMUNICATIONS COMMISSION</div>
    <div style="font-size:10pt;font-weight:bold;line-height:1;margin-bottom:0.3mm">REGIONAL OFFICE NO. V</div>
    <div style="font-size:8pt;line-height:1.1">Government Center Site, Brgy. Rawis, Legazpi City</div>
    <div style="font-size:8pt;line-height:1.1">Contact No: 0917-8507-751 (Globe) &amp; 0919-0771-302 (Smart)</div>
    <div style="font-size:8pt;line-height:1.1">Email: ntc5@ntc.gov.ph / ntcv_legazpi@yahoo.com&nbsp; Website: https://www.ntc.gov.ph</div>
  </div>
  <div style="width:16mm;height:16mm;flex-shrink:0">X</div>
</div>

<div class="issued">${e(d.issuedDate)}</div>

<div class="title">
  <div class="h">PERMIT TO PURCHASE RADIO TRANSMITTERS(s)/ TRANSCIEVER(s)</div>
  <div><span class="h">Permit No:&nbsp;</span>${e(d.permitNo)}</div>
</div>

<table>
  <tr><td class="lbl h">This is to certify that</td><td class="val-c">${e(d.certifiedName)}</td></tr>
  <tr><td class="lbl h">with postal address at</td><td class="val-c">${e(d.postalAddress)}</td></tr>
</table>

<p class="para h">is hereby granted this PERMIT TO PURCHASE radio transmitter(s) / transceiver(s) describe as follows:</p>

<table>
  <tr><td class="lbl h">Model:</td><td class="val">${e(d.model)}</td></tr>
  <tr><td class="lbl h">No of Units:</td><td class="val">${e(d.noOfUnits)}</td></tr>
  <tr><td class="lbl h">Frequency Range:</td><td class="val">${e(d.frequencyRange)}</td></tr>
  <tr><td class="lbl h">Frequency Assignment:</td><td class="val">${e(d.frequencyAssignment)}</td></tr>
  <tr><td class="lbl h">RF Power Output:</td><td class="val">${e(d.rfPowerOutput)}</td></tr>
</table>

<p class="para h">This permit shall be valid as a provisional permit to possess unless sooner or cancelled.</p>

<div class="gap"><span class="h"><b>Valid Until:&nbsp;</b></span>${e(d.validUntil)}</div>

<div class="section">
  <div class="or-left">
    <p><span class="h">Official Receipt:&nbsp;</span>${e(d.officialReceipt)}</p>
    <p><span class="h">AMOUNT:&nbsp;</span>${e(d.amount)}</p>
    <p><span class="h">Date Paid:&nbsp;</span>${e(d.datePaid)}</p>
    <p><span class="h">Encoded By:&nbsp;</span>${e(d.encodedBy)}</p>
    <p class="h">Intended use of requirement</p>
    ${intendedLine('For New Radio station')}
    ${intendedLine('Additional Requirement Equipment')}
    ${intendedLine('Change of Equipment')}
  </div>
  <div class="sig h">
    <p><b>ATTY. JUDY ANN N. BILANGEL</b></p>
    <small>OIC Regional Director, RV</small>
  </div>
</div>

<div class="notes h">
  <p><strong>Notes:</strong></p>
  <ol>
    <li>Issuance of this permit is without prejudice to any administrative case filed against this station or may be filled for previously commited violator</li>
    <li>Failure to submit application for permit to possess, radio construction Permit(if applicable) and/or application for Radio Station License within the validity of this PERMIT shall cause its cancellation and/or recall of the proposed frequency(ies).</li>
    <li>The Above-described equipment shall not be installed, operated sold or transfer without prior authority from the National Telecommunications Commission.</li>
    <li>Any person who shall install and or operate said equipment without the authorization from the NATIONAL TELECOMMUNICATIONS COMMISSION shall be subject to the penal provisons of ACT no. 3846.</li>
    <li>Any firm, company, corporation or association failing or refusing to observe or violating any provion of this Act shall be punished by a fine of not more than P 5,000 for each and every offense.</li>
    <li>Frequency assignment on sharing and strictly Non-Interference Basis(NIB).</li>
    <li>This PERMIT is not valid without evidence of payment and the official dry seal of the office.</li>
  </ol>
</div>

<div class="footer h">
  <p class="ft"><strong>National Telecommunications Commission</strong></p>
  <p>Central Office: NTC Building, BIR Road, East Triangle, Diliman, Quezon City</p>
  <p>Email: ntc@ntc.gov.ph &nbsp; Website: https://www.ntc.gov.ph</p>
</div>

</body></html>`;

    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:210mm;height:297mm;border:none;';
    document.body.appendChild(iframe);
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) { doc.open(); doc.write(html); doc.close(); }
    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      setTimeout(() => document.body.removeChild(iframe), 1500);
    }, 600);
  }

  goToEdit() {
    this.router.navigate(['/ptpurchase-edit']);
  }
}
