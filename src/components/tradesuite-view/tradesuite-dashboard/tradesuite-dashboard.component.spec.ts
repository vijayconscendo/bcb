import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesuiteDashboardComponent } from './tradesuite-dashboard.component';

describe('TradesuiteDashboardComponent', () => {
  let component: TradesuiteDashboardComponent;
  let fixture: ComponentFixture<TradesuiteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradesuiteDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradesuiteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
