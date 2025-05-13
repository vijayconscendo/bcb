import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesuiteComponent } from './tradesuite.component';

describe('TradesuiteComponent', () => {
  let component: TradesuiteComponent;
  let fixture: ComponentFixture<TradesuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradesuiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradesuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
