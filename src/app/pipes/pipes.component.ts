import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
 angularPipes:string="use pipes to format data in angular templates"
  personData={
    name:'john',
    age:30,
    email: 'john@gmail.com'
  }

  currentDate= new Date();
  // item=of(['apple','banana','grapes'])
}
