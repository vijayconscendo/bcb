import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCarouselWebComponent } from './finance-carousel-web.component';

describe('FinanceCarouselWebComponent', () => {
  let component: FinanceCarouselWebComponent;
  let fixture: ComponentFixture<FinanceCarouselWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceCarouselWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceCarouselWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
