import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { BookState } from '../../_store/book.reducer';
import * as bookActions from '../../_store/book.actions';


@Component({
  selector: 'lib-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.css']
})
export class BookEditorComponent implements OnInit {

  @ViewChild('f') fgForm: NgForm | any;
  
  public formGroup: any = FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<BookState>,
  ) { }

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      'name': ['', [Validators.required, Validators.minLength(5)]],
      'year': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  onSubmit(): void {
    const payload = {
      ...this.formGroup.value,
      id: (+ new Date()).toString(),
      reviews: [],
    }

    this._store.dispatch(bookActions.addBook({data: payload}));
    this.fgForm.resetForm();
  }

}
