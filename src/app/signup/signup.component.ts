import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  
 
  constructor(private router:Router){
    
     
  }
  signUp(): void {
  
    this.router.navigateByUrl('/login');
  
}
}
