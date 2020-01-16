import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-example';

  private username = "";
  private password = "";
  private readonly trueUsername = "Kryysha";
  private readonly truePassword = "omegalul";
  private alert1 = "";
  private login = false;
  private alert2 = "";

  clickedButton() {
    if(this.username === this.trueUsername && this.password === this.truePassword) {
      this.login = true
      this.alert1 = "Sign in successful";
    } else {
      this.alert2 = "Incorrect username or password, please try again";
    } 
  }

  backButton() {
    this.login = false
  }
}