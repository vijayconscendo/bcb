import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBankingLayoutComponent } from './online-banking-layout.component';

describe('OnlineBankingLayoutComponent', () => {
  let component: OnlineBankingLayoutComponent;
  let fixture: ComponentFixture<OnlineBankingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineBankingLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineBankingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
