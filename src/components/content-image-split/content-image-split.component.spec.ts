import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentImageSplitComponent } from './content-image-split.component';

describe('ContentImageSplitComponent', () => {
  let component: ContentImageSplitComponent;
  let fixture: ComponentFixture<ContentImageSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentImageSplitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentImageSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
