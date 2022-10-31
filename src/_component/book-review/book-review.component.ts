import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookState } from '../../_store/book.reducer';
import { retrieveBook } from '../../_store/book.selectors';

@Component({
  selector: 'lib-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {
  public book$: Observable<any>;

  constructor(
    private _store: Store<BookState>
  ) { 
    this.book$ = this._store.pipe(select(retrieveBook));
  }

  ngOnInit(): void {
  }

}
