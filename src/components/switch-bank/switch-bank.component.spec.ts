import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchBankComponent } from './switch-bank.component';

describe('SwitchBankComponent', () => {
  let component: SwitchBankComponent;
  let fixture: ComponentFixture<SwitchBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
