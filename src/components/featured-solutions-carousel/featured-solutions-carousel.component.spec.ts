import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSolutionsCarouselComponent } from './featured-solutions-carousel.component';

describe('FeaturedSolutionsCarouselComponent', () => {
  let component: FeaturedSolutionsCarouselComponent;
  let fixture: ComponentFixture<FeaturedSolutionsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedSolutionsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedSolutionsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
