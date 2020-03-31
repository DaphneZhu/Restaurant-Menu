import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Daphne Zhu';
  shoppingList: string[] = ['bread', 'milk','butter','egg'];
  rectangle = {
    length: 5,
    width: 6,
    area: function () {
      return this.length * this.width;
    }

  }
}
