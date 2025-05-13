import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBankingForBusinessComponent } from './online-banking-for-business.component';

describe('OnlineBankingForBusinessComponent', () => {
  let component: OnlineBankingForBusinessComponent;
  let fixture: ComponentFixture<OnlineBankingForBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineBankingForBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineBankingForBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
