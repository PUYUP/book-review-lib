import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewItemComponent } from './book-review-item.component';

describe('BookReviewItemComponent', () => {
  let component: BookReviewItemComponent;
  let fixture: ComponentFixture<BookReviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReviewItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
