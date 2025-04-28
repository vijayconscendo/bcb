import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySwitchComponent } from './country-switch.component';

describe('CountrySwitchComponent', () => {
  let component: CountrySwitchComponent;
  let fixture: ComponentFixture<CountrySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
