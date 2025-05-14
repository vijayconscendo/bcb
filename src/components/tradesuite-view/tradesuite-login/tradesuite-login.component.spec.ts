import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesuiteLoginComponent } from './tradesuite-login.component';

describe('TradesuiteLoginComponent', () => {
  let component: TradesuiteLoginComponent;
  let fixture: ComponentFixture<TradesuiteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradesuiteLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradesuiteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
