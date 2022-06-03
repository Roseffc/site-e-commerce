import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list/product-item/product-list.component.service';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {

  produtos: any = [];
  produtosAll: any = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBook().subscribe((data => {
      this.produtos = [...data];
      this.produtosAll = [...data];
      console.log(this.produtos);
    }))
  }
  handlerFilter(produto: any) {
    if (!produto.de && !produto.ate) {
      this.produtos = [...this.produtosAll];
    } else if (produto.de && produto.ate) {
      this.produtos = [...this.produtos.filter((item: any) => {
        return Number(item.price) > produto.de && Number(item.price) <= produto.ate
      })]
    } else if (produto.ate) {
      this.produtos = [...this.produtos.filter((item: any) => {
        return Number(item.price) <= produto.ate
      })]
    }
  }

}
