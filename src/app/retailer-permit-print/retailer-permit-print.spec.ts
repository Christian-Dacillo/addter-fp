import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerPermitComponent } from './retailer-permit-print.component';

describe('RetailerPermitComponent', () => {
  let component: RetailerPermitComponent;
  let fixture: ComponentFixture<RetailerPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailerPermitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerPermitComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
