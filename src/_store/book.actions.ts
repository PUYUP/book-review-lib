import { createAction, props } from '@ngrx/store';

// ADD BOOK
export const addBook = createAction(
  '[Book] Add Book',
  props<{ data: any }>()
);

export const addBookSuccess = createAction(
  '[Book] Add Book Success',
  props<{ data: any }>()
);

export const addBookFailure = createAction(
  '[Book] Add Book Failure',
  props<{ error: any }>()
);


// GET SINGLE BOOK
export const retrieveBook = createAction(
  '[Book] Retrieve Book',
  props<{ id: string }>()
);

export const retrieveBookSuccess = createAction(
  '[Book] Retrieve Book Success',
  props<{ data: any }>()
);

export const retrieveBookFailure = createAction(
  '[Book] Retrieve Book Failure',
  props<{ error: any }>()
);


// SEND REVIEW
export const addReview = createAction(
  '[Book] Add Review',
  props<{ bookId: string, data: any }>()
);

export const addReviewSuccess = createAction(
  '[Book] Add Review Success',
  props<{ data: any }>()
);

export const addReviewFailure = createAction(
  '[Book] Add Review Failure',
  props<{ error: any }>()
);


// GET ALL BOOK
export const getBooks = createAction(
  '[Book] Get Books'
);

export const getBooksSuccess = createAction(
  '[Book] Get Books Success',
  props<{ data: any }>()
);

export const getBooksBookFailure = createAction(
  '[Book] Get Books Failure',
  props<{ error: any }>()
);