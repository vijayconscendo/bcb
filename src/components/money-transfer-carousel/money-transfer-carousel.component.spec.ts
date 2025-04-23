import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferCarouselComponent } from './money-transfer-carousel.component';

describe('MoneyTransferCarouselComponent', () => {
  let component: MoneyTransferCarouselComponent;
  let fixture: ComponentFixture<MoneyTransferCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyTransferCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyTransferCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
