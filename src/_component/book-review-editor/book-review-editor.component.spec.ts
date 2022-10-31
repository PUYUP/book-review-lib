import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewEditorComponent } from './book-review-editor.component';

describe('BookReviewEditorComponent', () => {
  let component: BookReviewEditorComponent;
  let fixture: ComponentFixture<BookReviewEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReviewEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReviewEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
