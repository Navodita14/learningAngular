import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[

    {id:1, name:"ab"},
    {id:2, name:"ac"},
    {id:3, name:"bc"},
    {id:4, name:"Dbc"},
    {id:5, name:"gbc"},

  ]

}
