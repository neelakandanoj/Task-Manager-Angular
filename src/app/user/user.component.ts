import { Component, OnInit } from '@angular/core';
import {Router,RouterLink} from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string = '';
  password: string = '';
  valid: boolean = false;

  constructor(private router : Router){
    
  }

  ngOnInit(): void {}

  // Check if both username and password are filled
  checkValid() {
    this.valid = this.username.trim() !== '' && this.password.trim() !== '';
  }

  LoginData(uname: string, pass: string) {
    console.log('Username:', uname);
    console.log('Password:', pass);
    // alert('Login successful!');
    // this.router.navigateByUrl("/Directives/2")
    this.router.navigate(['data-binding/new'])
  }
}
