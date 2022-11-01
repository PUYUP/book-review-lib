import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookState } from '../../_store/book.reducer';
import { retrieveBook, selectBookList } from '../../_store/book.selectors';

@Component({
  selector: 'lib-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {
  @ViewChild('download') downloadLink: any;

  public book$: Observable<any>;
  public books$: Observable<any>;

  // export json
  public sanitizedBlobUrl: any;
  public currentDate = new Date();
  public filename = `${this.currentDate.toISOString()}.json`;

  constructor(
    private _store: Store<BookState>,
    private sanitizer: DomSanitizer
  ) { 
    this.book$ = this._store.pipe(select(retrieveBook));
    this.books$ = this._store.select(selectBookList);
  }

  ngOnInit(): void {
    
  }

  exportJSON(data: any): void {
   this._downloadFile(data);
  }

  private _downloadFile(data: any) {
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const blobUrl = window.URL.createObjectURL(blob);

    this.sanitizedBlobUrl = this.sanitizer.bypassSecurityTrustUrl(blobUrl);

    // trigger download link
    let el: HTMLElement = this.downloadLink.nativeElement;
    el.click();
  }
}
