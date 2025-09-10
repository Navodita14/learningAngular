import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  directvar="I am directly fetched"

  byFunc() {
    return "I am fetched by calling function"
  }

  imagesource="https://www.shutterstock.com/shutterstock/photos/1357807262/display_1500/stock-vector-online-shopping-application-vector-illustration-cartoon-flat-happy-girl-rolls-cart-foreground-is-1357807262.jpg"
}
