import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryStatementsComponent } from './history-statements.component';

describe('HistoryStatementsComponent', () => {
  let component: HistoryStatementsComponent;
  let fixture: ComponentFixture<HistoryStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryStatementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
