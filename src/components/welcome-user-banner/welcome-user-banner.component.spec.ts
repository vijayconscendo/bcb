import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeUserBannerComponent } from './welcome-user-banner.component';

describe('WelcomeUserBannerComponent', () => {
  let component: WelcomeUserBannerComponent;
  let fixture: ComponentFixture<WelcomeUserBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeUserBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeUserBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
