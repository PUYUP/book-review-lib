import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewLibComponent } from './book-review-lib.component';

describe('BookReviewLibComponent', () => {
  let component: BookReviewLibComponent;
  let fixture: ComponentFixture<BookReviewLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReviewLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReviewLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
