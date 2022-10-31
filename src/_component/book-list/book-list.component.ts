import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookState } from '../../_store/book.reducer';
import { selectBookList } from '../../_store/book.selectors';


@Component({
  selector: 'lib-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public bookList$: Observable<any>;

  constructor(
    private _store: Store<BookState>
  ) { 
    this.bookList$ = this._store.pipe(select(selectBookList))
  }

  ngOnInit(): void {
  }

}
