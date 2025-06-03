import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAgriBusinessComponent } from './your-agri-business.component';

describe('YourAgriBusinessComponent', () => {
  let component: YourAgriBusinessComponent;
  let fixture: ComponentFixture<YourAgriBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourAgriBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourAgriBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
