import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  isCondensed = false;
  sidebartype: string;
  currentUser: User;

  constructor() {
  }


}
