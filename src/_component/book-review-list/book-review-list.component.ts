import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-book-review-list',
  templateUrl: './book-review-list.component.html',
  styleUrls: ['./book-review-list.component.css']
})
export class BookReviewListComponent implements OnInit {

  @Input('book') book: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
