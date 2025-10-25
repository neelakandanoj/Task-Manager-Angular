import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  name: string ="FEDLearning";
  topic:string="Data Binding";
  imageUrl:string="https://angular.io/assets/images/logos/angular/angular.png";
  random:any;

  dummydata:any;
  

  onSave(){
    alert("Data Saved Successfully...")
  }
  onChange(){
    alert("Learning has changed...")
  }
}
