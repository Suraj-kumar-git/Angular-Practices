import { Component } from '@angular/core';
import { login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main_project';
  getFormData(data:login){
    alert("Username: "+data.username+", Password: "+data.password);
  }
}
