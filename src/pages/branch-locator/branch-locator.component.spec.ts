import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchLocatorComponent } from './branch-locator.component';

describe('BranchLocatorComponent', () => {
  let component: BranchLocatorComponent;
  let fixture: ComponentFixture<BranchLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchLocatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
