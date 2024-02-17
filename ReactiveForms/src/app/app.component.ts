import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main_project';

  submitted = false;
  registerForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){
    
  }
  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Z][a-z]{5}')]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    });
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }else{
      alert('Form Submitted...');
    }
  }
}
