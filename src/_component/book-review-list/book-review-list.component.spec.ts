import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewListComponent } from './book-review-list.component';

describe('BookReviewListComponent', () => {
  let component: BookReviewListComponent;
  let fixture: ComponentFixture<BookReviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReviewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
