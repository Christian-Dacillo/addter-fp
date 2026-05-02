import { Routes } from '@angular/router';
import { DealerPermitComponent } from './dealer-permit/dealer-permit.component';
import { RetailerPermitComponent } from './retailer-permit-print/retailer-permit-print.component';
import { ServiceCenterPermitComponent } from './service-center-permit/service-center-permit.component';
import { PTPurchasePermitComponent } from './ptpurchase/ptpurchase-permit-component';
import { PTPurchaseEditComponent } from './ptpurchase/ptpurchase-edit.component';
import { PTPossessPermitComponent } from './ptpossess/ptpossess-permit-component';
import { RslicenseComponent } from './rsl/rslicense.component';
import { AmateurComponent } from './amateur/amateur.component';
import { FphnComponent } from './fphn/fphn.component';
import { SphnComponent } from './sphn/sphn.component';
import { TphnComponent } from './tphn/tphn.component';
import { FRTGComponent } from './frtg/frtg.component';

export const routes: Routes = [
  { path: 'retailer-permit-print', component: RetailerPermitComponent },
  { path: 'dealer-permit', component: DealerPermitComponent },
  { path: 'service-center-permit', component: ServiceCenterPermitComponent },
  { path: 'ptpurchase', component: PTPurchasePermitComponent },
  { path: 'ptpurchase-edit', component: PTPurchaseEditComponent },
  { path: 'ptpossess', component: PTPossessPermitComponent },
  { path: 'rsl', component: RslicenseComponent},
  { path: 'amateur', component: AmateurComponent },
  { path: 'fphn', component: FphnComponent },
  { path: 'sphn', component: SphnComponent },
  { path: 'tphn', component: TphnComponent },
  { path: 'frtg', component: FRTGComponent },
];