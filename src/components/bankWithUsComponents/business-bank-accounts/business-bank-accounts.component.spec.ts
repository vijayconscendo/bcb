import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBankAccountsComponent } from './business-bank-accounts.component';

describe('BusinessBankAccountsComponent', () => {
  let component: BusinessBankAccountsComponent;
  let fixture: ComponentFixture<BusinessBankAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessBankAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessBankAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
