import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalhubPushSliderComponent } from './digitalhub-push-slider.component';

describe('DigitalhubPushSliderComponent', () => {
  let component: DigitalhubPushSliderComponent;
  let fixture: ComponentFixture<DigitalhubPushSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalhubPushSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalhubPushSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
