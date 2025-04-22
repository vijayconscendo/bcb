import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcountBannerComponent } from './ucount-banner.component';

describe('UcountBannerComponent', () => {
  let component: UcountBannerComponent;
  let fixture: ComponentFixture<UcountBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcountBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcountBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
