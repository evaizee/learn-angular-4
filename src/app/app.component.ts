import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dammit';
  cool = 'keren';
  name = ['uco', 'riri', 'budi', 'test'];
  activeName : string;
  changeText(){
  	this.activeName = this.name[Math.floor(Math.random() * this.name.length)];
  }
}
