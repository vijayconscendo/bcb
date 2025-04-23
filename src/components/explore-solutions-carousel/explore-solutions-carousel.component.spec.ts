import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSolutionsCarouselComponent } from './explore-solutions-carousel.component';

describe('ExploreSolutionsCarouselComponent', () => {
  let component: ExploreSolutionsCarouselComponent;
  let fixture: ComponentFixture<ExploreSolutionsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreSolutionsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreSolutionsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
