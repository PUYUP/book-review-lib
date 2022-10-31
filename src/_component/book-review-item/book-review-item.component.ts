import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-book-review-item',
  templateUrl: './book-review-item.component.html',
  styleUrls: ['./book-review-item.component.css']
})
export class BookReviewItemComponent implements OnInit {

  @Input('review') review: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
