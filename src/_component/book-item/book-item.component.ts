import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveBook } from '../../_store/book.actions';
import { BookState } from '../../_store/book.reducer';

@Component({
  selector: 'lib-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input('book') book: any;

  constructor(
    private _store: Store<BookState>
  ) { }

  ngOnInit(): void {
  }

  onSelectBook(book: any) {
    this._store.dispatch(retrieveBook({id: book.id}));
  }

}
