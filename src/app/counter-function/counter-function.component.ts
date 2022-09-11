import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-function',
  templateUrl: './counter-function.component.html',
  styleUrls: ['./counter-function.component.css']
})
export class CounterFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.counter(1);
  }

  counter(initialValue? : any){
    return [this.firstFunction(initialValue != '' ? initialValue : 0), 
    this.secondFunction(initialValue != '' ? initialValue : 0)];
  }

  firstFunction(currentCounterValue : any){
    return currentCounterValue;
  }
 
  secondFunction(internalCounter : any){
    return internalCounter + 1;
  }

}
