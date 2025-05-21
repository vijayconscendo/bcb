import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymobizAccountCardComponent } from './mymobiz-account-card.component';

describe('MymobizAccountCardComponent', () => {
  let component: MymobizAccountCardComponent;
  let fixture: ComponentFixture<MymobizAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MymobizAccountCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymobizAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
