import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['name', 'age', 'address', 'action'];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      { name: 'John', age: 20, address: 'Noida', action: '' },
      { name: 'Nick', age: 20, address: 'Delhi', action: '' },
      { name: 'Ben', age: 20, address: 'Agra', action: '' },
      { name: 'Furry', age: 20, address: 'GZB', action: '' }
    ]

  }

}
