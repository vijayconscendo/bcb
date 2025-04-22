import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthSolutionGridComponent } from './unauth-solution-grid.component';

describe('UnauthSolutionGridComponent', () => {
  let component: UnauthSolutionGridComponent;
  let fixture: ComponentFixture<UnauthSolutionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthSolutionGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthSolutionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
