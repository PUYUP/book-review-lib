import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { BookReviewLibComponent } from './book-review-lib.component';
import { BookEditorComponent } from '../_component/book-editor/book-editor.component';
import { BookListComponent } from '../_component/book-list/book-list.component';
import { BookItemComponent } from '../_component/book-item/book-item.component';
import { BookReviewComponent } from '../_component/book-review/book-review.component';
import { BookReviewListComponent } from '../_component/book-review-list/book-review-list.component';
import { BookReviewItemComponent } from '../_component/book-review-item/book-review-item.component';
import { BookReviewEditorComponent } from '../_component/book-review-editor/book-review-editor.component';


@NgModule({
  declarations: [
    BookReviewLibComponent,
    BookEditorComponent,
    BookListComponent,
    BookItemComponent,
    BookReviewComponent,
    BookReviewListComponent,
    BookReviewItemComponent,
    BookReviewEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [
    BookReviewLibComponent,
  ],
  entryComponents: [
    BookEditorComponent,
    BookListComponent,
    BookItemComponent,
    BookReviewComponent,
    BookReviewListComponent,
    BookReviewItemComponent,
    BookReviewEditorComponent,
  ]
})
export class BookReviewLibModule { }
