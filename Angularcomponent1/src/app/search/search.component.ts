import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchValue=""
  onChange(event:Event){
    this.searchValue= (<HTMLInputElement>event.target).value
  }

  searchValue2="Samsung"
}
