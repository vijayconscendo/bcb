import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithListComponent } from './tabs-with-list.component';

describe('TabsWithListComponent', () => {
  let component: TabsWithListComponent;
  let fixture: ComponentFixture<TabsWithListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsWithListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsWithListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
