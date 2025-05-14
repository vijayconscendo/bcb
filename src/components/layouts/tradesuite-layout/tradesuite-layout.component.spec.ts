import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesuiteLayoutComponent } from './tradesuite-layout.component';

describe('TradesuiteLayoutComponent', () => {
  let component: TradesuiteLayoutComponent;
  let fixture: ComponentFixture<TradesuiteLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradesuiteLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradesuiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
