import { Component, OnInit,Output , Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() all: number=0;
  @Input() free: number=0;
  @Input() premium: number=0;

  selectedRadioButton= 'All';

  @Output() filterRadioButtonSelectionChanged: EventEmitter<string>= new EventEmitter<string>();

  onRadioButtonSelectedChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton); 
    
  }
}
