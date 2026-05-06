import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  constructor(private readonly router: Router) {}

  openPermit(path: string) {
    window.open(path, '_blank');
  }

  isPrintRoute(): boolean {
    return [
      '/retailer-permit-print',
      '/retailer-edit',
      '/dealer-permit',
      '/dealer-edit',
      '/service-center-permit',
      '/ptpurchase',
      '/ptpurchase-edit',
      '/ptpossess',
      '/ptpossess-edit',
      '/rsl',
      '/rsl-edit',
      '/amateur',
      '/amateur-edit',
      '/fphn',
      '/fphn-edit',
      '/sphn',
      '/sphn-edit',
      '/tphn',
      '/tphn-edit',
      '/frtg',
      '/frtg-edit'
    ].includes(this.router.url);
  }
}
