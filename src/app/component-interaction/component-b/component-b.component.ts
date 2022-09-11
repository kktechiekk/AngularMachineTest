import { Component, Input, OnInit } from '@angular/core';
import { ComponentAComponent } from '../component-a/component-a.component';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
  
})
export class ComponentBComponent implements OnInit {
  @Input() componentAValue: any;

  componentBValue = 'Hey Hi I am from Component B';
  // accessing this value in component A

  constructor(private componentA: ComponentAComponent) {
    //calling Component A methods from here
    const data = this.componentA.showData();
    console.log("method data is",data);
    
  }

  ngOnInit(): void {
    console.log('Component A value in Component B is ', this.componentAValue);
  }

  showData(){
    return "I am from Component B : method call"
  }
}
