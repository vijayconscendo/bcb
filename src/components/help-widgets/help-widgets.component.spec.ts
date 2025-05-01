import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpWidgetsComponent } from './help-widgets.component';

describe('HelpWidgetsComponent', () => {
  let component: HelpWidgetsComponent;
  let fixture: ComponentFixture<HelpWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpWidgetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
