import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenifitCardsComponent } from './benifit-cards.component';

describe('BenifitCardsComponent', () => {
  let component: BenifitCardsComponent;
  let fixture: ComponentFixture<BenifitCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenifitCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenifitCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
