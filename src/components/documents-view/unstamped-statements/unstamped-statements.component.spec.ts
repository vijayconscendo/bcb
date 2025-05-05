import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstampedStatementsComponent } from './unstamped-statements.component';

describe('UnstampedStatementsComponent', () => {
  let component: UnstampedStatementsComponent;
  let fixture: ComponentFixture<UnstampedStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnstampedStatementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnstampedStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
