import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  dados:any={}
  @Output() eventFilter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  filtrar(){
    console.log('Fui cricado', this.dados)
    this.eventFilter.emit(this.dados)
  }

}
