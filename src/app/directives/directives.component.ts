import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  ischecked : boolean = false;
  isinput : boolean = true;
  input1 :string="";
  input2: string= "";
 

  onClick(){
    this.ischecked = !this.ischecked;
  }
  isShow(){
    this.isinput = true;
  }
  isHide(){
    this.isinput = false
  }


  // *ngFor Structural Directives

  employee :any[]=[
    {name:'john',empnum:101,empmail:"john@gmail.com",dept:"IT"},
    {name:'David',empnum:102,empmail:"david@gmail.com",dept:"IT"},
    {name:'Ge',empnum:103,empmail:"ge@gmail.com",dept:"IT"},
    {name:'Nica',empnum:104,empmail:'nica@gmail.com',dept:'QA'}
  ]
  companyList: string[] = ['TCS', 'Wipro', 'Infosys', 'HCL', 'Tech Mahindra','Cognizant',"Accenture"];


  //*ngSwitch

  grade: number=0;

  set(num:number){
      this.grade=num;
      console.log(this.grade);
  }

   //Attribute Directives
  textcolor: string='text-success'

  changecolor(str:string){
    this.textcolor=str;
  }
}
