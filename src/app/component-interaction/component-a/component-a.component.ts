import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ComponentBComponent } from '../component-b/component-b.component';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ComponentAComponent implements OnInit, AfterViewInit {

  @ViewChild(ComponentBComponent) child : any;

  componentAValue = 'Hey Hi I am from Component A';
  showBValue: any;
    // accessing this value in component B using @input() decorator

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("component B value in component A is",this.child.componentBValue);
    this.showBValue = this.child.componentBValue;
    let componentBMethodValue =  this.child.showData();
    console.log("Component B Method value is",componentBMethodValue);
  }

  showData(){
    return "I am from Component A : method call"
  }

}
