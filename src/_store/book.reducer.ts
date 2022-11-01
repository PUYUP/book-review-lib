import { Action, createReducer, on } from '@ngrx/store';
import * as bookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface BookState {
  add: {
    data: any
    error: any
    status: string
  },
  list: {
    data: any
    error: any,
    status: string
  },
  retrieve: {
    data: any
    error: any
    status: string
  },
}

export const initialState: BookState = {
  add: {
    data: {},
    error: undefined,
    status: 'idle',
  },
  list: {
    data: [
      {
        "id": "1",
        "name": "Harry Potter",
        "year": 2010,
        "reviews": [
          {
            "email": "john.doe@gmail.com",
            "note": "Great book to read",
            "star": 5
          },
          {
            "email": "jane.doe@gmail.com",
            "note": "Mediocre book to read",
            "star": 3
          }
        ]
      },
      {
        "id": "2",
        "name": "The Hunger Games",
        "year": 2012,
        "reviews": [
          {
            "email": "john.doe@gmail.com",
            "note": "Amazing book to read",
            "star": 4
          }
        ]
      }
    ],
    error: undefined,
    status: 'idle',
  },
  retrieve: {
    data: {},
    error: undefined,
    status: 'idle',
  },
};

export const reducer = createReducer(
  initialState,

  on(bookActions.addBook, (state, payload) => {
    return {
      ...state,
      add: {
        ...state.add,
        data: payload.data,
      },
      list: {
        ...state.list,
        data: [
          payload.data,
          ...state.list.data,
        ]
      }
    }
  }),

  on(bookActions.retrieveBook, (state, payload) => {
    const book = state.list.data.find((d: any) => d.id == payload.id)

    return {
      ...state,
      retrieve: {
        ...state.retrieve,
        data: book,
      }
    }
  }),

  on(bookActions.addReview, (state, payload) => {
    const bookIndex = state.list.data.findIndex((d: any) => d.id == payload.bookId);

    return {
      ...state,
      list: {
        ...state.list,
        data: [
          ...state.list.data.slice(0, bookIndex),
          {
            ...state.list.data[bookIndex],
            reviews: [
              payload.data,
              ...state.list.data[bookIndex].reviews,
            ],
          },
          ...state.list.data.slice(bookIndex + 1),
        ]
      },
      retrieve: {
        ...state.retrieve,
        data: {
          ...state.retrieve.data,
          reviews: [
            payload.data,
            ...state.retrieve.data.reviews,
          ]
        }
      }
    }
  }),

  on(bookActions.getBooks, (state) => {
    return {
      ...state,
      list: state.list
    }
  })
);

export function BookReducer(state: BookState | undefined, action: Action) {
  return reducer(state, action);
}
