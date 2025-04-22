import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBannerOneComponent } from './page-banner-one.component';

describe('PageBannerOneComponent', () => {
  let component: PageBannerOneComponent;
  let fixture: ComponentFixture<PageBannerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBannerOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBannerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
