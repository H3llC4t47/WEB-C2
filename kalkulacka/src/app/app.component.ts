import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kalkulacka';

  public result: string = "";
  name(value: string) {
    if (value == "=") {
      this.result = eval(this.result);
    } else {
      this.result += value;
    }
  }
}