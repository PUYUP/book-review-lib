import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './book.reducer';

export const selectFeature = createFeatureSelector<BookState>('book');

export const selectBookList = createSelector(
	selectFeature,
	(state: any) => {
		return state.list;
  	}
);

export const retrieveBook = createSelector(
	selectFeature,
	(state: any) => {
		return state.retrieve;
  	}
);