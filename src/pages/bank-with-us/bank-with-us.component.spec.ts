import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankWithUsComponent } from './bank-with-us.component';

describe('BankWithUsComponent', () => {
  let component: BankWithUsComponent;
  let fixture: ComponentFixture<BankWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankWithUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
