import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-notify',
  template:`<div class="alert alert-success"><p>Hii i am notify, my template was witten in template not in html file and imported in templateUrls and same with style </p></div>`,
  styles: ["div{margin:10px 0px; padding:10px 20px}", "p{ color:darkgreen}"]
})
export class NotifyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
