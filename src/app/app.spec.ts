import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent as App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render permit launch buttons on non-print routes', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const buttonTexts = Array.from(compiled.querySelectorAll('button')).map((button) =>
      button.textContent?.trim(),
    );

    expect(buttonTexts).toEqual([
      'Mobile Phone Retailers Permit',
      'Mobile Phone Dealers Permit',
      'Service Center Permit',
      'Permit to Purchase',
      
    ]);
  });
});
