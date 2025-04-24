import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceRequestTableComponent } from './list-service-request-table.component';

describe('ListServiceRequestTableComponent', () => {
  let component: ListServiceRequestTableComponent;
  let fixture: ComponentFixture<ListServiceRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListServiceRequestTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListServiceRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
