import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankWithUsHomeComponent } from './bank-with-us-home.component';

describe('BankWithUsHomeComponent', () => {
  let component: BankWithUsHomeComponent;
  let fixture: ComponentFixture<BankWithUsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankWithUsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankWithUsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
