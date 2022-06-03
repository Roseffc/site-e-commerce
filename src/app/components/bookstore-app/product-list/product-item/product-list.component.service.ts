import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of } from "rxjs";

@Injectable({
   providedIn: 'root'
})

export class BooksService {
   private url = '';

   produtos = [
      {
         name: 'Pulseira Prata com Pedras',
         category: 'Pulseiras',
         quantity: ' ',
         price: '100',
         imageUrl: '/assets/img/pulseiraprata.jpeg',
      },
      {
         name: 'Anel Dourado Pedras e V',
         category: 'Anéis',
         quantily: '15',
         price: '80',
         imageUrl: '/assets/img/anel.jpeg',
      },
      {
         name: 'Brincos Prata Argolas V',
         category: 'Brincos',
         quantily: '8',
         price: '60',
         imageUrl: '/assets/img/brincos.jpeg',
      },
      {
         name: 'Kit Gargantilha e Brinco de Pedra',
         category: 'Kits',
         quantily: '5',
         price: '150',
         imageUrl: '/assets/img/colar.jpeg',
      },
      {
         name: 'Brinco Dourado',
         category: 'Brincos',
         quantily: ' ',
         price: '70',
         imageUrl: '/assets/img/brinco.jpeg',
      },
      {
         name: 'Pulseira Prata',
         category: 'Pulseiras',
         quantily: ' ',
         price: '90',
         imageUrl: '/assets/img/pulseira.jpeg',
      },
   ]
   constructor() { }

   getBook() {
      return of(this.produtos)
   }

}
