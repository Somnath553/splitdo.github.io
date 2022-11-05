import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'splitdo';
  city:string;
  constructor()
  {
    this.city = 'none';
    console.log(this.city);
  }
  change()
  {
    this.city = 'no'
    console.log(this.city);
  }
  onKeydown(event: KeyboardEvent)
  {
        this.city=event.key;
  }
}


