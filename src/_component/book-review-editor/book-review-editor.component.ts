import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addReview } from '../../_store/book.actions';
import { BookState } from '../../_store/book.reducer';

@Component({
  selector: 'lib-book-review-editor',
  templateUrl: './book-review-editor.component.html',
  styleUrls: ['./book-review-editor.component.css']
})
export class BookReviewEditorComponent implements OnInit {

  @Input('book') book: any;

  public formGroup: any = FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<BookState>,
  ) { }

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'note': ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  onSubmit(): void {
    this._store.dispatch(addReview({bookId: this.book.data.id, data: this.formGroup.value}));
  }

}
