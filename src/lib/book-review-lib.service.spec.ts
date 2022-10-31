import { TestBed } from '@angular/core/testing';

import { BookReviewLibService } from './book-review-lib.service';

describe('BookReviewLibService', () => {
  let service: BookReviewLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookReviewLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
