import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourVehiclesComponent } from './your-vehicles.component';

describe('YourVehiclesComponent', () => {
  let component: YourVehiclesComponent;
  let fixture: ComponentFixture<YourVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourVehiclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
