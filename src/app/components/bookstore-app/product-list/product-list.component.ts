import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from './product-item/product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input() produtos: any;
 
  constructor( ) {}

  ngOnInit(): void {}

}
