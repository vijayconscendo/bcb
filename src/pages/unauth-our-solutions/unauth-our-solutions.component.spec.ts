import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthOurSolutionsComponent } from './unauth-our-solutions.component';

describe('UnauthOurSolutionsComponent', () => {
  let component: UnauthOurSolutionsComponent;
  let fixture: ComponentFixture<UnauthOurSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthOurSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthOurSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
