import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySolutioncardsComponent } from './my-solutioncards.component';

describe('MySolutioncardsComponent', () => {
  let component: MySolutioncardsComponent;
  let fixture: ComponentFixture<MySolutioncardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySolutioncardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySolutioncardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
