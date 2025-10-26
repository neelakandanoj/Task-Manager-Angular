import { Component,OnChanges,OnInit,DoCheck,AfterContentInit,AfterViewChecked,AfterContentChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  constructor(){
    console.log("constructor called")
  }
  ngOnChanges() {
    //component input Property
    console.log("1.ngOnChages called")
  }

  ngOnInit(): void {
    //use for API calles
    console.log("2.ngOninit called")
  }

  ngDoCheck(): void {
    //use for every changes detected.
    console.log("3.ngDOchecked called..");
  }

  ngAfterContentInit(): void {
    //used for ng-content
    console.log("4.ngAfterContentinit called..");
    
  }
  ngAfterContentChecked(): void {
    console.log("5.ngAfterContentChecked ..");
  }
  ngAfterViewInit(): void {
    console.log("6.ngAfterViewInit called..");
  }
  ngAfterViewChecked(){
    console.log("7. ngAfterViewCHecked called ..");
  }

  ngOnDestroy(): void {
    console.log("8.ngOnDestroy called..");
    
  }

}
